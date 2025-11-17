// contexts/AuthContext.tsx
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
    const initAuth = async () => {
      if (auth.isAuthenticated()) {
        const storedUser = auth.getStoredUser()
        if (storedUser) {
          setUser(storedUser)
        }

        try {
          const currentUser = await auth.getCurrentUser()
          if (currentUser) {
            setUser(currentUser)
          }
        } catch (error) {
          console.error('Failed to fetch current user:', error)
          auth.logout() // Clear invalid session
        }
      }
      setIsLoading(false)
    }

    initAuth()
  }, [])

  const login = async (email: string, password: string) => {
    const user = await auth.login({ email, password })  // ← Now returns User directly
    setUser(user)
  }

  const register = async (email: string, password: string, name: string) => {
    const user = await auth.register({ email, password, name })  // ← Now returns User directly
    setUser(user)
  }

  const logout = async () => {
    await auth.logout()
    setUser(null)
  }

  const refetchUser = async () => {
    const currentUser = await auth.getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    } else {
      setUser(null)
    }
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
