import React from 'react'
import './Footer.css'
import {Bounce,Fade} from 'react-reveal'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container p-5'>
        <Fade top cascade big>
          <h2 className='text-center mt-5 fw-bolder'>Aakash Sharma</h2>
          <h6 className='text-center'>Software Developer</h6>
        </Fade>
        
        <div className='social-icons d-flex justify-content-center mt-5'>
          <Bounce bottom cascade big duration={2000}>
            <ul className='list-unstyled'>
              <li className='float-start px-3 fs-3'><a><FaFacebook/></a></li>
              <li className='float-start px-3 fs-3'><a><FaGithub/></a></li>
              <li className='float-start px-3 fs-3'><a><FaLinkedin/></a></li>
              <li className='float-start px-3 fs-3'><a><FaTwitter/></a></li>
            </ul>
          </Bounce>
          
        </div>
      </div>
    </section>
  )
}

export default Footer