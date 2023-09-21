import React from 'react'
import './Services.css'

import {motion} from 'framer-motion'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  const transition = {duration:3,type: 'spring'}
  return (
    <div className='services' id='Services'>
      <div className='awesome'>
        {/* left side */}
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ex, dolorem quidem delectus doloremque
          <br />
          similique excepturi natus earum suscipit culpa. Voluptates sunt doloribus commodi!
        </span>
       
       <a href={Resume}>
       <button className='button s-button'>Download CV</button>
       </a>

        <div className="blur s-blur1" style={{ background:"#ABF1FF94"}}></div>



      </div>

      {/* right side */}
      <div className='cards'>
          
        <motion.div style={{left:'14rem'}}
            initial={{left:'25%'}}
            transition={transition}
            whileInView={{left:'14rem'}}
        >
            <Card 
            
            emoji ={HeartEmoji}
            heading = 'Database'
            detail = "Sql , Mongodb"


          />  
        </motion.div>
           {/* Second card */}
        <div style={{ top:"12rem", left:"-4rem"}}>
            <Card 
            
            emoji={Glasses}
            heading={"Backend"}
            detail={
              "Node.js , Express , Javascript "
            }
            
            />


          </div>
          {/* Third Card */}
          <motion.div style={{ top:"19rem", left:"12rem"}}
            initial={{left:'25rem'}}
            whileInView={{left:'12rem'}}
            transition={transition}

          >
            <Card 
            
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Html , Css , Javascript , React"
            }
            
            />


          </motion.div>

          <div className="blur s-blur2" style={{ background:"var(--purple"}}></div>

      </div>
    </div>
  )
}

export default Services
