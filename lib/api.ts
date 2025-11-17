// lib/api.ts
import { storage } from './storage'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/v1'

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean
}

class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { requiresAuth = false, headers = {}, ...restOptions } = options

    const config: RequestInit = {
      ...restOptions,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }

    // Add Authorization header if required
    if (requiresAuth) {
      const token = storage.getAccessToken()
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      }
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config)

      // Handle 401 - Token expired → try refresh
      if (response.status === 401 && requiresAuth) {
        const refreshed = await this.refreshToken()
        if (refreshed) {
          // Retry original request with new token
          const token = storage.getAccessToken()
          if (token) {
            config.headers = {
              ...config.headers,
              Authorization: `Bearer ${token}`,
            }
          }
          const retryResponse = await fetch(`${this.baseURL}${endpoint}`, config)
          if (!retryResponse.ok) {
            throw new Error('Request failed after token refresh')
          }
          const data = await retryResponse.json() as T
          return data
        } else {
          storage.clearAll()
          window.location.href = '/login'
          throw new Error('Session expired')
        }
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          detail: 'An error occurred'
        }))
        throw new Error(error.detail || 'Request failed')
      }

      
      const data = await response.json() as T
      return data

    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Auth endpoints
  async register(data: any) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async login(data: any) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async refreshToken(): Promise<boolean> {
    try {
      const refreshToken = storage.getRefreshToken()
      if (!refreshToken) return false

      const response = await this.request<any>('/auth/refresh', {
        method: 'POST',
        body: JSON.stringify({ refresh_token: refreshToken }),
      })

      storage.setAccessToken(response.access_token)
      storage.setRefreshToken(response.refresh_token)
      storage.setUser(response.user)

      return true
    } catch (error) {
      return false
    }
  }

  async getCurrentUser() {
    return this.request('/auth/me', {
      requiresAuth: true,
    })
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
      requiresAuth: true,
    })
  }

  // Generic authenticated requests
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', requiresAuth: true })
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      requiresAuth: true,
    })
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      requiresAuth: true,
    })
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', requiresAuth: true })
  }
}

export const api = new ApiClient(API_URL)
