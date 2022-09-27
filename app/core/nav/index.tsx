import Menu from './Menu'
import Nav from './Nav'

export function Top() {
  return (
    <div className="sticky top-0 bg-white dark:bg-dark-lot z-10">
      <Nav />

      <Menu>
        <Menu.Item to="/">All</Menu.Item>
        <Menu.Item to="/events">Events</Menu.Item>
        <Menu.Item to="/todos">Todos</Menu.Item>
        <Menu.Item to="/goals">Goals</Menu.Item>
      </Menu>
    </div>
  )
}
