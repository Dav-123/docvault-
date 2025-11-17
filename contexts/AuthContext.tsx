"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '@/lib/auth'
import type { User } from '@/types/auth'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
  refetchUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated on mount
    const initAuth = async () => {
      if (auth.isAuthenticated()) {
        const storedUser = auth.getStoredUser()
        if (storedUser) {
          setUser(storedUser)
        }
        
        // Fetch fresh user data
        try {
          const currentUser = await auth.getCurrentUser()
          setUser(currentUser)
        } catch (error) {
          console.error('Failed to fetch user:', error)
          setUser(null)
        }
      }
      setIsLoading(false)
    }

    initAuth()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await auth.login({ email, password })
    setUser(response.user)
  }

  const register = async (email: string, password: string, name: string) => {
    const response = await auth.register({ email, password, name })
    setUser(response.user)
  }

  const logout = async () => {
    await auth.logout()
    setUser(null)
  }

  const refetchUser = async () => {
    const currentUser = await auth.getCurrentUser()
    setUser(currentUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
