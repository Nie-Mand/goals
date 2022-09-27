import { ActionFunction, type LoaderFunction } from '@remix-run/node'
import { Top, Main } from '~/core'
import { getAll, current, login, supabase } from '~/service'
import { useLoaderData, useActionData } from '@remix-run/react'

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData()
  const { user, session, error } = await login(
    data.get('email')?.toString() || '',
    data.get('password')?.toString() || ''
  )
  console.log(user, session, error)
  if (error) {
    return {
      error: error.message,
    }
  }

  return {}
}

export default function Index() {
  const { done, ongoing, user } = useLoaderData()

  const action = useActionData()
  console.log({ action })

  const error = null

  return (
    <div className="bg-white dark:bg-dark-lot min-h-screen">
      <Top />
      <Main className="flex flex-col lg:flex-row items-start space-y-3 lg:space-x-3 text-black dark:text-text-white">
        <div className="flex-1 w-full lg:w-auto">
          <form method="post" className="grid gap-4">
            <label htmlFor="email" className="grid gap-2">
              <span className="font-semibold text-sm">Email:</span>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
              />
            </label>

            <label htmlFor="password" className="grid gap-2">
              <span className="font-semibold text-sm">Password:</span>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
              />
            </label>
            <div>
              {action && action.error && (
                <div className="text-red-500 text-xs">{action.error}</div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                className="px-3 py-2 text-xs font-semibold duration-200 bg-[#333] hover:bg-[#444] rounded-md "
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Main>
    </div>
  )
}

export const loader: LoaderFunction = async () => {
  const goals = await getAll()
  const done = goals.filter(goal => goal.done)
  const ongoing = goals.filter(goal => !goal.done)

  const user = await current()

  return {
    user,
    done,
    ongoing,
  }
}
