import Menu from './Menu'
import Nav from './Nav'

export function Top() {
  return (
    <div className="sticky top-0 bg-white dark:bg-dark-lot z-10">
      <Nav />

      <Menu>
        <Menu.Item to="/">Overview</Menu.Item>
        <Menu.Item to="/events">Events and Dates</Menu.Item>
      </Menu>
    </div>
  )
}
