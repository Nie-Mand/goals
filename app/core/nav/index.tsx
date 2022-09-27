import Menu from './Menu'
import Nav from './Nav'
import { useAuthenticate } from '~/service/auth'

export function Top() {
  const { user, loading } = useAuthenticate()

  return (
    <div className="sticky top-0 bg-white dark:bg-dark-lot z-10">
      <Nav />

      <Menu>
        <Menu.Item to="/">All</Menu.Item>
        <Menu.Item to="/events">Events</Menu.Item>
        <Menu.Item to="/todos">Todos</Menu.Item>

        <Menu.Item to="/goals">Goals</Menu.Item>
        {loading === false && user && <Menu.Item to="/add">Add Item</Menu.Item>}
      </Menu>
    </div>
  )
}
