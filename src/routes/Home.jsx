import React from 'react'
import Navbar from '../components/Navbar'

import './Home.css'

const Header = () => {
  return (
    <div className="header">
      <h2>APRIL 22, 2023</h2>
      <h1>The Student's Digest</h1>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}

export default Home