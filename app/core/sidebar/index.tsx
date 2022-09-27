import { NavLink } from '@remix-run/react'
import { Select } from '~/core/select'

export function Sidebar() {
  return (
    <>
      <div className="block lg:hidden ">
        <Select
          contentClassName="relative top-[5rem] left-3 md:left-8"
          groupedOptions={[
            {
              label: 'Section One',
              options: [
                { label: 'General', value: 'general' },
                { label: 'Usage Billing', value: 'billing' },
                { label: 'Security', value: 'security' },
              ],
            },
            {
              label: 'Section Two',
              options: [
                { label: 'Team Members', value: 'members' },
                { label: 'Invitations', value: 'invitations' },
                { label: 'Authentication', value: 'authentication' },
              ],
            },
          ]}
        />
      </div>
      <div className="w-1/5 hidden lg:flex flex-col text-sm">
        <Item to="/still">October</Item>
        <Item to="/">November</Item>
        <Item to="/still">Beta Features</Item>
        <Item to="/still">Integrations</Item>
        <Item to="/still">Members</Item>
        <Item to="/still">Service Tokens</Item>
        <Item to="/still">Teams</Item>
        <Item to="/still">Usage and Billing</Item>
      </div>
    </>
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
        `py-2 text-gray-400 hover:text-black duration-200 ${
          isActive ? 'font-semibold text-black dark:text-white' : 'font-normal'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
