// lib/auth.ts
import { api } from './api'
import { storage } from './storage'
import type { AuthResponse, LoginCredentials, RegisterData, User } from '@/types/auth'

export const auth = {
  async register(data: RegisterData): Promise<User> {
    const response = await api.register(data) as AuthResponse
    
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)
    
    return response.user
  },

  async login(credentials: LoginCredentials): Promise<User> {
    const response = await api.login(credentials) as AuthResponse   // ← THIS LINE FIXES IT
    
    storage.setAccessToken(response.access_token)
    storage.setRefreshToken(response.refresh_token)
    storage.setUser(response.user)
    
    return response.user
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
