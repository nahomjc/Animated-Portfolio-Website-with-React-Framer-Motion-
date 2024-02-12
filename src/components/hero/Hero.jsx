import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <div className="textContainer">
            <h2>Nahom Tesfaye</h2>
            <h1>Web developer</h1>
            <div className="buttons">
                <button>See the Latest Works</button>
                <button id='contact'>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="" />
             </div>
        </div>
        <div className="imageContainer">
            <img src="/profile.png" alt="" />
        </div>
    </div>
    
  )
} 

export default Hero 