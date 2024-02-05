import React from 'react'
import {motion} from 'framer-motion'
import './app.scss'
const Test = () => {
  return (
    <motion.div className='course' animate={{opacity:0.2}} transition={{duration:2, delay:2}}>
        <div className='box'></div>
    </motion.div>
  )
}

export default Test