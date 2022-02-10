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
        
        <div className='social-icons mt-5 d-flex justify-content-center'>
          <Bounce bottom cascade big duration={1000}>
            <ul className='list-unstyled'>
              <li className='d-inline-block'><a className='text-secondary  px-3 fs-3' href='https://www.facebook.com/profile.php?id=100005963888429 '><FaFacebook/></a></li>
              <li className='d-inline-block'><a className='text-secondary  px-3 fs-3' href='https://github.com/aakash1003'><FaGithub/></a></li>
              <li className='d-inline-block'><a className='text-secondary  px-3 fs-3' href='https://www.linkedin.com/in/aakash-sh1/'><FaLinkedin/></a></li>
              <li className='d-inline-block'><a className='text-secondary  px-3 fs-3' href='https://twitter.com/Aakash_Sh1'><FaTwitter/></a></li>
            </ul>
          </Bounce>
          
        </div>
      </div>
    </section>
  )
}

export default Footer