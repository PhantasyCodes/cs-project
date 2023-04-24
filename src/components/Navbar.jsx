import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.div`
    z-index: 99;
    cursor: pointer;
    margin: 0 2rem;
    // background-color: red;
`

const Path = (props) => (
    <motion.path strokeLinecap="round" strokeWidth="2" {...props} />
)

const transition = { duration: 0.3 }

const MenuToggle = (props) => {
    console.log(props.isOpen)
  return (
    <Button onClick={props.toggle} >
        <svg width="43" height="43" viewBox="0 0 33 17">
            <Path 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{
                    closed: { d: "M 2 3.5 L 20 3.5" , stroke: "hsl(0, 0%, 100%)" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" }
                }} 
                transition={transition} />
            <Path 
                d="M 2 9.423 L 15 9.423" 
                stroke="hsl(0, 0%, 100%)" 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{closed: {opacity: 1}, open: {opacity: 0}}} 
                transition={transition} />
            <Path 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{ closed : { d: "M 2 15.346 L 20 15.346", stroke: "hsl(0, 0%, 100%)" }, open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" } }} 
                transition={transition} />
        </svg>
    </Button>
  )
}

const NavLink = styled(motion.li)`
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        text-decoration: none;
        font-family: Furore;
        color: #EA1626;
        font-size: 3.5vw;
        transition: all 300ms ease-in-out;
        margin-bottom: 2vw;
    }

    &:hover {
        a {
            color: black;
        }
    }
`

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

  return (
    <div className='navbar'>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
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