import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='bg-secondary text-center' >
        <h1>contact us</h1>
        <div><i class="fa-brands fa-facebook" style={{color:'black',fontSize:'45px',padding:'5px'}}></i>
        <i class="fa-brands fa-instagram" style={{color:'black',fontSize:'45px',padding:'5px'}}></i>
        <i class="fa-brands fa-whatsapp" style={{color:'black',fontSize:'45px',padding:'5px'}}></i>
        <i class="fa-brands fa-youtube" style={{color:'black',fontSize:'45px',padding:'5px'}}></i>
        </div>
        <div>
          <a href="">home</a>
          <a href="">about</a>
          <a href="">contact</a>
          <a href="">news</a>
          <a href="">our team</a>
        </div>
        <div>
          <p>Copyright 2024</p>
        </div>
    </div>
  )
}

export default Footer