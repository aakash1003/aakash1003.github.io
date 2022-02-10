import React from 'react'
import Typical from 'react-typical'
import {Fade} from 'react-reveal'
import './Home.css'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import SnowStorm from 'react-snowstorm'

const Home = () => {
  return (
    <section id='home'>
        <div className='container my-5'>
        <SnowStorm snowColor="Red" snowCharacter="A" snowStick={false} usePositionFixed={true} animationInterval="50" excludeMobile={false}/>
        <SnowStorm snowColor="black" targetElement="home" snowStick={false} usePositionFixed={true}  excludeMobile={false}/>   
        <SnowStorm snowColor="purple" snowStick={false} usePositionFixed={true} excludeMobile={false}/> 
        <Fade top duration={3000}>
            <h1 className='text-center mb-4 display-1 fw-bold'>I'm Aakash Sharma.</h1>
            <h3 className='text-center'>Software Developer Located in India</h3>
            <h4 className='text-center'>
            
                <Typical
                    loop={Infinity}
                    steps={[
                        " Specialized in Front-end Development",
                        2000,
                        " Specialized in Devops",
                        2000
                    ]}
                />
            </h4>
            <div className='resume__button'>
            <a><button className=' btn btn-outline-secondary'>View Resume</button></a>
                
            </div>
        </Fade>
            <div className='social__icons'>
                <Fade top duration={1000} cascade big>
                    <ul>
                        <li><a className='text-secondary' href='https://www.facebook.com/profile.php?id=100005963888429 '><FaFacebook/></a></li>
                        <li><a className='text-secondary' href='https://github.com/aakash1003'><FaGithub/></a></li>
                        <li><a className='text-secondary' href='https://www.linkedin.com/in/aakash-sh1/'><FaLinkedin/></a></li>
                        <li><a className='text-secondary' href='https://twitter.com/Aakash_Sh1'><FaTwitter/></a></li>
                    </ul>
                </Fade>
            </div>
        </div>
    </section>
  )
}

export default Home