import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import './Article.css'

const Article = () => {
  return (
    <div className='article-page'>
        <Navbar />
        <Header />
        <div className="article-holder">
            <h2 className='genre'>HEALTH</h2>
            <h1 className='title'>The Benefits of Hiking for Mental Health</h1>
            <h3 className='author'>by: John Doe</h3>
            <h3 className='date'>Updated April 20, 2023 at 9.19 p.m | Published April 19, 2023 at 9.00 a.m</h3>
            <div className="article-img"></div>
            <div className="article-links">
                <div className="article-link">
                <FontAwesomeIcon icon={faComment} />
                                                </div>
            </div>
        </div>
    </div>
  )
}

export default Article