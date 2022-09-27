import { NavLink } from '@remix-run/react'

interface MenuProps {
  children: React.ReactNode
}

export default function Menu({ children }: MenuProps) {
  return (
    <menu className="text-sm font-normal contained border-b dark:border-white/10 flex">
      {children}
    </menu>
  )
}

Menu.Item = Item

interface MenuItemProps {
  to: string
  children: React.ReactNode
}
function Item({ to, children }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-black dark:text-text-white p-4 border-b  relative top-px duration-200 ${
          isActive
            ? 'font-semibold border-blue-400 dark:border-blue-600'
            : 'hover:border-gray-400 hover:dark:border-white/40 dark:border-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
