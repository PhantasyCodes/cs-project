import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-links">
            <Link to='/'>Entertainment</Link>
            <Link to='/'>Technology</Link>
            <Link to='/'>Science</Link>
            <Link to='/'>Business</Link>
            <Link to='/'>Health</Link>
            <Link to='/'>Sports</Link>
        </div>
    </div>
  )
}

export default Navbar