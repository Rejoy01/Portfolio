import React from 'react'
import "./Work.css" ;

import Upwork from '../../img/Upwork.png'
import Fiver from'../../img/fiverr.png'
import Amazon from'../../img/amazon.png'
import Shopify from'../../img/Shopify.png'
import Facebook from'../../img/Facebook.png'
import {motion} from 'framer-motion'
const Work = () => {
  const transition ={duration:3.5,type:'spring'}
  return (
    <div className='works'>
            {/* left side */}
    <div className='awesome'>
        <span>Works For All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ex, dolorem quidem delectus doloremque
          <br />
          similique excepturi natus earum suscipit culpa. Voluptates sunt doloribus commodi!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti tene
          <br />
        </span>
       
       

        <div className="blur s-blur1" style={{ background:"#ABF1FF94"}}></div>
        {/* right side */}
      </div>
        <div className="w-right">
            <motion.div 
              initial={{rotate:45}}
              whileInView={{rotate:0}}
              viewport={{margin:"-40px"}}
              transition={transition}
            
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiver} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work
