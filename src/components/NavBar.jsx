import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav data-comp='NavBar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        首页
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        关于
      </NavLink>
    </nav>
  )
}

export default NavBar
