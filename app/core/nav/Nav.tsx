import { Link } from '@remix-run/react'

export default function Nav() {
  return (
    <nav className="flex items-center space-x-3 pt-6 lg:pt-8 pb-2 contained">
      <Link
        to="/"
        className="h-9 w-9 bg-gradient-to-b from-orange-400 via-orange-700 to-orange-900 rounded-full"
      >
        {' '}
      </Link>

      <Link to="/xyz" className="font-medium  text-black dark:text-text-white">
        Niemands-goals
      </Link>

      <div className="flex-1"></div>

      {/* <Dropdown
        contentClassName="relative top-12 right-4 sm:right-10 lg:right-14 xl:right-[7.5rem]"
        groupedOptions={[
          {
            options: [
              { label: 'Profile', value: 'profile' },
              { label: 'Settings', value: 'settings' },
              { label: 'Create New Organization', value: 'create-new-org' },
              { label: 'Support', value: 'support' },
            ],
          },
          {
            options: [{ label: 'Log Out', value: 'logout' }],
          },
        ]}
      >
        <div className="h-9 w-9 bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-900 rounded-full"></div>
      </Dropdown> */}
    </nav>
  )
}
