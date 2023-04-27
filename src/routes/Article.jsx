import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import './Article.css'

const Article = () => {
  return (
    <div className='article-page'>
        <Navbar />
        <Header />
        <div className="article-holder">
            <h2 className='genre'>HEALTH</h2>
            <h1 className='title'>The Benefits of Hiking for Mental Health</h1>
        </div>
    </div>
  )
}

export default Article