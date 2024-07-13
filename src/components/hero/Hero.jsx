import React from 'react'
import './hero.scss'
import {motion} from 'framer-motion'

const textVariants=
{
initial:{
  x:-500,
  opacity:0
},
animate:{
  x:0,
  opacity:1,
  transition:{
    duration:1,
    staggerChildren:0.1

  }
},
scrollButton:{
  opacity:0,
  y:10,
  transition:{
    duration:2,
    repeat:Infinity,
  }

}
}
const sliderVariants=
{
initial:{
  x:0,

},
animate:{
  x:"-200%",

  transition:{
    repeat:Infinity,
    repeatType:'mirror',
    duration:20,

  }
},
scrollButton:{
  opacity:0,
  y:10,
  transition:{
    duration:2,
    repeat:Infinity,
  }

}
}
const Hero = () => {

  return (
    <div className='hero'>
       <motion.div className="slidingTextContainerTwo" variants={sliderVariants} initial='initial' animate='animate'>
       Full Stack Web Developer  |   Freelancer    |  Full Stack Web Developer  |  Freelancer  |  Full Stack Web
        </motion.div>
       
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}
        initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>NAHOM TESFAYE</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Web Developer </motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>See the Latest Works</motion.button>
                <motion.button id='contact' variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img  src="/scroll.png" alt="" variants={textVariants} animate='scrollButton'/>
             </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
         Freelancer  |  Full Stack Web Developer  |  Freelancer  |  Full Stack Web Developer  |  Freelancer  |   Full Stack Web Developer  |
        </motion.div>
        <div className="imageContainer">
            <img src="myPic.png" alt="" width={900} height={700}/>
        </div>
    </div>
    
  )
} 

export default Hero 