import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div data-comp='Root'>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root
