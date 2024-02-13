import React from 'react'
import './parallax.scss'
const Parallax = () => {
  return (
    <div className='parallax'>
        <h1>{type==='services'? 'What We Do?':'What we Did'}</h1>
        <div className='mountains'></div>
        <div className='planets'></div>
        <div className='mountains'></div>
        <div className='stars'></div>
    </div>
  )
}

export default Parallax