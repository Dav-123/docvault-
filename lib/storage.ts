// Secure token storage
const ACCESS_TOKEN_KEY = 'docvault_access_token'
const REFRESH_TOKEN_KEY = 'docvault_refresh_token'
const USER_KEY = 'docvault_user'

export const storage = {
  // Access Token
  setAccessToken: (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ACCESS_TOKEN_KEY, token)
    }
  },

  getAccessToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(ACCESS_TOKEN_KEY)
    }
    return null
  },

  removeAccessToken: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ACCESS_TOKEN_KEY)
    }
  },

  // Refresh Token
  setRefreshToken: (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(REFRESH_TOKEN_KEY, token)
    }
  },

  getRefreshToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(REFRESH_TOKEN_KEY)
    }
    return null
  },

  removeRefreshToken: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(REFRESH_TOKEN_KEY)
    }
  },

  // User Data
  setUser: (user: any): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(user))
    }
  },

  getUser: (): any | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem(USER_KEY)
      return user ? JSON.parse(user) : null
    }
    return null
  },

  removeUser: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(USER_KEY)
    }
  },

  // Clear all auth data
  clearAll: (): void => {
    storage.removeAccessToken()
    storage.removeRefreshToken()
    storage.removeUser()
  }
}
