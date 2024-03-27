import './services.scss'
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p>I focus on helping your bran grow and <br/>
             move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src='/people.webp' alt=''/>
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><b>For Your</b> Business</h1>
                <button>WHAT WE Do</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p>orem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consecture adipiscing elit. 
                    Nostrum libero enim nisi aliquam consecteture expedita
                     magni eius ex corrupti anim ad nam pariature assumenda quae mollitia libero repellat</p>
                <button>Go</button>
            </div>
        </motion.div>
        </motion.div>
  )
}

export default Services