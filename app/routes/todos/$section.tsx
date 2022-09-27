import { type LoaderFunction } from '@remix-run/node'
import {
  Top,
  Main,
  TodosSidebar as Sidebar,
  Card,
  type Goal,
  Skeleton,
} from '~/core'
import { getTodosBy } from '~/service'
import { useLoaderData, useTransition } from '@remix-run/react'

export default function Index() {
  const { done, ongoing } = useLoaderData()
  const transition = useTransition()

  return (
    <div className="bg-white dark:bg-dark-lot min-h-screen">
      <Top />
      <Main className="flex flex-col lg:flex-row items-start space-y-3 lg:space-x-3 text-black dark:text-text-white">
        <Sidebar />
        <div className="flex-1 w-full lg:w-auto">
          {transition.state === 'loading' ? (
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              {ongoing.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                  {ongoing.map((goal: Goal) => (
                    <Card key={goal.id} {...goal} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h1 className="text-[#999] font-semibold text-sm flex items-center space-x-2">
                    <span>Nothing to do</span>
                    <span className="text-xs">👍</span>
                  </h1>
                </div>
              )}
              <Divid label="Done" />
              {done.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                  {done.map((goal: Goal) => (
                    <Card key={goal.id} {...goal} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h1 className="text-[#999] font-semibold text-sm flex items-center space-x-2">
                    <span>Nothing has been done</span>
                    <span className="text-xs">🤷‍♂️</span>
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </Main>
    </div>
  )
}

function Divid({ label }: { label: string }) {
  return (
    <div className="py-10 flex items-center space-x-4">
      <h1 className="text-sm font-semibold">{label}</h1>
      <div className="h-px flex-1 bg-white/10"></div>
    </div>
  )
}

export const loader: LoaderFunction = async ctx => {
  const section = ctx.params.section

  const goals = await getTodosBy(section || '')
  const done = goals.filter(goal => goal.done)
  const ongoing = goals.filter(goal => !goal.done)

  return {
    done,
    ongoing,
  }
}
