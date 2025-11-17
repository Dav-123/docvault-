import { api } from './api'
import { storage } from './storage'
import type { AuthResponse, LoginCredentials, RegisterData, User } from '@/types/auth'

export const auth = {
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.register(data)
    
    // Store tokens and user
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)
    
    return response
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.login(credentials)
    
    // Store tokens and user
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)
    
    return response
  },

  async logout(): Promise<void> {
    try {
      await api.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      storage.clearAll()
    }
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const user = await api.getCurrentUser()
      storage.setUser(user)
      return user
    } catch (error) {
      storage.clearAll()
      return null
    }
  },

  isAuthenticated(): boolean {
    return !!storage.getAccessToken()
  },

  getStoredUser(): User | null {
    return storage.getUser()
  }
}
