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
                    Comment
                </div>
            </div>
            <div className="article-body">
                <p>
                    Hiking is not only an enjoyable way to explore the great outdoors, but it also offers numerous benefits for mental health. 
                    Whether you're looking to improve your mood, reduce stress, or simply disconnect from the daily grind, hiking can be a great way to achieve these goals. 
                    Here are some of the benefits of hiking for mental health. <br></br><br></br> Hiking is not only good for your physical health but also your mental health. 
                    Spending time in nature has been shown to reduce stress, anxiety, and depression. 
                    Being surrounded by the natural beauty of forests, mountains, and rivers can be a calming and relaxing experience. 
                    Hiking also provides a sense of achievement and accomplishment that can boost self-esteem and confidence.<br></br><br></br>
                    Moreover, hiking can help you to disconnect from the stress of daily life and reconnect with yourself. 
                    In a world where we are constantly bombarded with digital distractions, hiking allows us to unplug and enjoy the present moment. 
                    It can be a great way to clear your mind, reflect on your thoughts, and gain a fresh perspective. <br></br><br></br>
                    Hiking is an activity that can be enjoyed by people of all ages and fitness levels. 
                    However, it is important to start slowly and build up your endurance and strength gradually. 
                    You can start by choosing an easy trail that is suitable for beginners and gradually progress to more challenging trails as you gain experience and confidence.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Article