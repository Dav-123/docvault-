export interface User {
  id: string
  email: string
  name: string
  subscription_tier: 'free' | 'pro' | 'lifetime'
  created_at: string
  email_verified: boolean
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
}

export interface AuthError {
  message: string
  field?: string
}
