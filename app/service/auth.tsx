import { useNavigate } from '@remix-run/react'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { createClient } from '@supabase/supabase-js'
import { Top } from '~/core'

interface AuthContextI {
  user: any
  error: string | null
  loginError: string | null
  loading: boolean | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextI>({
  loading: null,
  user: null,
  error: null,
  loginError: null,
  login: async () => {},
  logout: async () => {},
})

export const useAuthenticate = () => useContext(AuthContext)

export function AuthProvider({
  children,
  surl,
  skey,
}: {
  children: React.ReactNode
  surl: string
  skey: string
}) {
  const supabase = useMemo(() => {
    return createClient(surl, skey)
  }, [surl, skey])

  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<null | boolean>(null)
  const [error, setError] = useState<string | null>(null)
  const [loginError, setLoginError] = useState<string | null>(null)
  const push = useNavigate()

  const login = useCallback(
    async (email: string, password: string) => {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      })
      if (error) {
        setLoginError(error.message)
        setUser(null)
      } else {
        setLoginError(null)
        setUser(user)
        if (session && session.access_token) {
          localStorage.setItem('token', session.access_token)
        }
        push('/')
      }
    },
    [push, supabase]
  )

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setError(error.message)
    } else {
      setError(null)
      setUser(null)
      localStorage.removeItem('token')
      push('/login')
    }
  }, [push, supabase])

  const getUser = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.api.getUser(
      localStorage.getItem('token') || ''
    )
    if (error) {
      setError(error.message)
      setUser(null)
    } else {
      setError(null)
      setUser(data)
    }
    setLoading(false)
  }, [supabase])

  useEffect(() => {
    getUser()
  }, [getUser])

  const value = useMemo(
    () => ({
      user,
      error,
      login,
      logout,
      loginError,
      loading,
    }),
    [user, error, login, logout, loginError, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function Protected({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthenticate()

  const push = useNavigate()
  useEffect(() => {
    if (loading === false && !user) {
      push('/login')
    }
  }, [user, loading, push])

  if (loading)
    return (
      <div className="bg-white dark:bg-dark-lot min-h-screen">
        <Top />
        <div className="w-full fixed top-0 h-screen grid place-content-center">
          <h1 className="text-[#999] font-semibold text-lg flex items-center space-x-4">
            <span>Loading</span>
            <div className="h-px bg-white/10 w-10"></div>
            <span>A little Second</span>
          </h1>
        </div>
      </div>
    )
  return <>{children}</>
}
