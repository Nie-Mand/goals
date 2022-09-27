import { Top, Main, Radios } from '~/core'
import { create } from '~/service'
import { Protected } from '~/service/auth'
import { useActionData } from '@remix-run/react'
import { type ActionFunction, redirect } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const data = Object.fromEntries(formData)

  const error = await create(data)
  if (error) {
    return error
  } else {
    return redirect('/')
  }
}

export default function Index() {
  const error = useActionData()

  return (
    <Protected>
      <div className="bg-white dark:bg-dark-lot min-h-screen">
        <Top />
        <Main className="flex flex-col lg:flex-row items-start space-y-3 lg:space-x-3 text-black dark:text-text-white">
          <div className="flex-1 w-full lg:w-auto">
            <form method="post" className="grid gap-4">
              <label htmlFor="label" className="grid gap-2">
                <span className="font-semibold text-sm">Label:</span>
                <input
                  required
                  type="text"
                  id="label"
                  name="label"
                  className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <label htmlFor="when" className="grid gap-2">
                <span className="font-semibold text-sm">When:</span>
                <input
                  required
                  type="text"
                  id="when"
                  name="when"
                  className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <label htmlFor="section" className="grid gap-2">
                <span className="font-semibold text-sm">Section:</span>
                <Radios
                  name="section"
                  defaultValue="october-22"
                  options={[
                    { label: 'October 2022', value: 'october-22' },
                    { label: 'November 2022', value: 'november-22' },
                    { label: 'December 2022', value: 'december-22' },
                  ]}
                />
              </label>

              <label htmlFor="description" className="grid gap-2">
                <span className="font-semibold text-sm">Description:</span>
                <textarea
                  name="description"
                  id="description"
                  required
                  className="h-20 !outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2 resize-none"
                ></textarea>
              </label>

              <label htmlFor="link" className="grid gap-2">
                <span className="font-semibold text-sm">Link:</span>
                <input
                  type="text"
                  id="link"
                  name="link"
                  className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <label htmlFor="is" className="grid gap-2">
                <span className="font-semibold text-sm">Category:</span>
                <Radios
                  name="is"
                  defaultValue="goal"
                  options={[
                    { label: 'Goal', value: 'goal' },
                    { label: 'Event', value: 'event' },
                    { label: 'Todo', value: 'todo' },
                  ]}
                />
              </label>

              <label htmlFor="prize" className="grid gap-2">
                <span className="font-semibold text-sm">Prize:</span>
                <input
                  type="text"
                  id="prize"
                  name="prize"
                  className="!outline-none focus:!outline-none duration-200 focus:shadow-sm focus:shadow-white/50 text-xs bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <div>
                {error && <div className="text-red-500 text-xs">{error}</div>}
              </div>
              <div className="flex justify-end">
                <button
                  className="px-3 py-2 text-xs font-semibold duration-200 bg-[#333] hover:bg-[#444] rounded-md "
                  type="submit"
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </Main>
      </div>
    </Protected>
  )
}
