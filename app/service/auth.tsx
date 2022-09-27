import { type SupabaseClient } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export const SupabaseContext = createContext<SupabaseClient>(
  null as unknown as SupabaseClient
)

export const SupabaseProvider = ({
  children,
  supabase,
}: {
  supabase: SupabaseClient
  children: React.ReactNode
}) => (
  <SupabaseContext.Provider value={supabase}>
    {children}
  </SupabaseContext.Provider>
)

export const useSupabase = () => useContext(SupabaseContext)
