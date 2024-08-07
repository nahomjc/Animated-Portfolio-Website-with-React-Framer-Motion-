import './services.scss'
import {motion} from 'framer-motion'

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        },

    }
}
const Services = () => {
  return (
    <motion.div className='services'
    variants={variants}
    animate='animate'
    initial='initial'
    whileInView='animate '>
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow and <br/>
             move forward.</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='/people.webp' alt=''/>
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><b>For Your</b> Business</h1>
                <button>WHAT WE Do</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Branding</h2>
                <p>orem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"whileHover={{background:'lightgray',color:'black'}}>
                <h2>Branding</h2>
                <p>orem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"whileHover={{background:'lightgray',color:'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
        </motion.div>
  )
}

export default Services