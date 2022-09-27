import { createClient } from '@supabase/supabase-js'
import { useCallback, useEffect } from 'react'

const url = process.env.SUPABASE_URL || ''
const key = process.env.SUPABASE_PUBLIC_ANON || ''

export const supabase = createClient(url, key)

export async function getAll() {
  const { data, error } = await supabase.from('goals').select()
  if (error) return []
  return data
}

export async function getAllBy(section: string) {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('section', section)

  if (error) return []
  return data
}

export async function getGoals() {
  const { data, error } = await supabase.from('goals').select().eq('is', 'goal')
  if (error) return []
  return data
}

export async function getGoalsBy(section: string) {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('section', section)
    .eq('is', 'goal')

  if (error) return []
  return data
}

export async function getEvents() {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('is', 'event')
  if (error) return []
  return data
}

export async function getEventsBy(section: string) {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('section', section)
    .eq('is', 'event')

  if (error) return []
  return data
}

export async function getTodos() {
  const { data, error } = await supabase.from('goals').select().eq('is', 'todo')
  if (error) return []
  return data
}

export async function getTodosBy(section: string) {
  const { data, error } = await supabase
    .from('goals')
    .select()
    .eq('section', section)
    .eq('is', 'todo')

  if (error) return []
  return data
}

export async function login(email: string, password: string) {
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  })

  return { user, session, error }
}

export function current() {
  const session = supabase.auth.user()

  console.log({ session })
}

export function useLogout() {
  const logout = useCallback(async function logout() {
    await supabase.auth.signOut()
  }, [])

  return logout
}
