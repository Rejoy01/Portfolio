import React from 'react'
import "./Footer.css"

import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"

import Wave from "../../img/wave.png"

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>rejoywilson11@gmail.com</span>
            <div className="f-icons">
                <Insta color='white'/>
                <Facebook color='white'/>
                <Github color='white'/>
                

            </div>
        </div>
      
    </div>
  )
}

export default Footer
