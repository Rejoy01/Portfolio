import React, { useEffect, useRef, useState } from 'react'
import './Intro.css'

import {motion} from 'framer-motion'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  const transition = {duration:2,type: 'spring'}

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
             <span>Hi! I Am </span>
             <span>Rejoy Wilson</span>
             <span>FullStack Developer </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
           
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        
        <motion.img 
          initial={{left: "-36%"}}
        
          transition={transition}
          whileInView={{left:"-24%"}}
          // animate={{left:"-24%"}}
          src={glassesimoji}
          alt=""
        />

        <motion.div style={{top:'-4%',left:'68%'}}
          initial={{top:'-4%',left:'74%'}}
          transition={transition}
          whileInView={{left:'68%'}}
        >
            <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
        </motion.div>
        
        <motion.div style={{top:'18rem',left:'0rem'}}
         initial={{left:'9rem',top:'18rem'}}
         whileInView={{left:'0rem'}}
         transition={transition} 
        
        >
          <FloatingDiv image={thumbup} text1='Best design' text2 = 'Award'/>
        </motion.div>
        {/* blur divs*/}
        <div className='blur'></div>
        <div className='blur' style={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}></div>
      </div>
    </div>
  )
}

export default Intro
