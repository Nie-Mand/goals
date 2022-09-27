import { createCookieSessionStorage } from '@remix-run/node'
import { supabase } from '.'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: 'supabase-session',
      expires: new Date(Date.now() + 3600),
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: true,
    },
  })

export { getSession, commitSession, destroySession }

export const setAuthToken = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))

  supabase.auth.setAuth(session.get('access_token'))

  return session
}
