import { Links, Meta, Scripts, useCatch } from '@remix-run/react'
import { Top, Main, Sidebar } from '~/core'
export default function Index() {
  return (
    <div className="bg-white dark:bg-dark-lot min-h-screen">
      <Top />
      <Main className="flex flex-col lg:flex-row items-start space-y-3 lg:space-x-3 text-black dark:text-text-white">
        <Sidebar />
        <div className="flex-1 w-full lg:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Divid label="Done" />
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
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

interface CardProps {
  label: string
  when: string
  description: string
  link?: string
  done?: boolean
}

function Card() {
  return (
    <div className="text-sm border dark:border-white/10 dark:bg-[#222] rounded-md p-6">
      <h1 className="font-semibold text-base pb-1">Hello world</h1>
      <h2 className="text-xs text-[#999] pb-1">Sub Description</h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>

      <div className="flex justify-end w-full pt-4">
        <button className="bg-[#333] hover:bg-[#444] duration-200 font-semibold rounded-md border border-white/10 px-3 py-2 text-xs">
          Follow
        </button>
      </div>
    </div>
  )
}
