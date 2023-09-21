import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';




const Contact = () => {

  const[done,SetDone] =  useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vodg69o', 'template_aihcido', form.current, '_fVE7DC8USy2T_0F8')
      .then((result) => {
          console.log(result.text);
          SetDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-form' id='Contact'>
      <div className="w-left">
        <div className="awesome">
            <span>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
      </div>
      
        <div className="c-right">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" className="user" placeholder='Name' name='user_name'/>  
            <input type="email" className="user" placeholder='Email' name='user_email'/>
            <textarea name="message" className='user' placeholder='Message'></textarea>  
            <input type="submit" className="button" value="Send" />
            <span>{done && "Thanks for contacting me"}</span>
            <div className="blur c-blur1" style={{background:"var{--purple}"}}>
            </div>  
          </form>  
        </div>  
    
    </div>
  )
}

export default Contact
