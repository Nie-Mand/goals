import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import { Top } from './core'
import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Niemands Goals',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="dark">
        <div className="bg-white dark:bg-dark-lot min-h-screen">
          <Top />
          <div className="w-full fixed top-0 h-screen grid place-content-center">
            <h1 className="text-[#999] font-semibold text-lg flex items-center space-x-4">
              <span>{caught.status}</span>
              <div className="h-px bg-white/10 w-10"></div>
              <span>{caught.statusText}</span>
            </h1>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}

export const loader = () => {
  return {
    supabaseKey: process.env.SUPABASE_ANON_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
  }
}
