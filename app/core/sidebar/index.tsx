import { NavLink } from '@remix-run/react'

export function Sidebar() {
  return (
    <>
      <div className="w-full lg:w-1/5 flex flex-col text-sm">
        <Item to="/">All</Item>
        <Item to="/all/october-22">October 2022</Item>
        <Item to="/all/november-22">November 2022</Item>
      </div>
      <div className="block lg:hidden w-full">
        <Divid label="Goals" />
      </div>
    </>
  )
}

export function TodosSidebar() {
  return (
    <>
      <div className="w-full lg:w-1/5 flex flex-col text-sm">
        <Item to="/todos">All</Item>
        <Item to="/todos/october-22">October 2022</Item>
        <Item to="/todos/november-22">November 2022</Item>
      </div>
      <div className="block lg:hidden w-full">
        <Divid label="Goals" />
      </div>
    </>
  )
}

export function EventsSidebar() {
  return (
    <>
      <div className="w-full lg:w-1/5 flex flex-col text-sm">
        <Item to="/events">All</Item>
        <Item to="/events/october-22">October 2022</Item>
        <Item to="/events/november-22">November 2022</Item>
      </div>
      <div className="block lg:hidden w-full">
        <Divid label="Goals" />
      </div>
    </>
  )
}

export function GoalsSidebar() {
  return (
    <>
      <div className="w-full lg:w-1/5 flex flex-col text-sm">
        <Item to="/goals">All</Item>
        <Item to="/goals/october-22">October 2022</Item>
        <Item to="/goals/november-22">November 2022</Item>
      </div>
      <div className="block lg:hidden w-full">
        <Divid label="Goals" />
      </div>
    </>
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

interface ItemProps {
  to: string
  children: React.ReactNode
}
function Item({ to, children }: ItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-2 text-gray-400 hover:text-black hover:dark:text-white duration-200 ${
          isActive ? 'font-semibold text-black dark:text-white' : 'font-normal'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
