import { api } from './api'
import { storage } from './storage'
import type { AuthResponse, LoginCredentials, RegisterData, User } from '@/types/auth'


function setAuthCookie(token: string) {
  document.cookie = `docvault_access_token=${token}; path=/; Secure; SameSite=Strict; Max-Age=1800` // 1 hr
}


function clearAuthCookie() {
  document.cookie = `docvault_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}

export const auth = {
  async register(data: RegisterData): Promise<User> {
    const response = await api.register(data) as AuthResponse
    
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)

    setAuthCookie(response.access_token)

    return response.user
  },

  async login(credentials: LoginCredentials): Promise<User> {
    const response = await api.login(credentials) as AuthResponse
    
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)

    setAuthCookie(response.access_token)

    return response.user
  },

  async logout(): Promise<void> {
    try {
      await api.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      storage.clearAll()
      clearAuthCookie()  // Clear cookie too
    }
  },

  
  async getCurrentUser(): Promise<User | null> {
        try {
      const user = await api.getCurrentUser() as User
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
