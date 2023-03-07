import React from 'react'
import NavBar from './NavBar'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
      <NavBar/>
      <Link to='FirstUserDetail'>User 1</Link>
      <Link to='SecondUserDetail'>User 2</Link>
      <Link to='ThirdUserDetail'>User 3</Link>
      <Outlet/>
    </div>
  )
}

export default Users
