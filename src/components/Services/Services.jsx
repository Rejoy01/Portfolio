import React from 'react'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { EffectCards } from 'swiper'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>
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
          
        <div style={{left:'14rem'}}>
            <Card 
            
            emoji ={HeartEmoji}
            heading = 'Design'
            detail = "Figna,sketch,photoshop,Adobe"


          />  
        </div>
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
          <div style={{ top:"19rem", left:"12rem"}}>
            <Card 
            
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Html , Css , Javascript , React"
            }
            
            />


          </div>

          <div className="blur s-blur2" style={{ background:"var(--purple"}}></div>

      </div>
    </div>
  )
}

export default Services
