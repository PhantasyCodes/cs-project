import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
    )
}

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