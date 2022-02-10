import React from 'react'
import './About.css'
import {Fade} from 'react-reveal'

const About = () => {
  return (
    <section id='about'>
        <div className='container'>
            <div className='row'>
                <div className=' about__content col-lg-6 col-sm-12 col-md-6 py-3 mt-5'>
                    <Fade bottom duration={3000} cascade>
                        <h2 className='fw-bolder text-danger px-5 pt-3'>About Me</h2>
                        <h5 className='text-secondary px-5'>Software Developer</h5>
                        <p className='text-secondary overflow-hidden px-5 mt-3'>I am Jhone Deo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                        <div className='about__buttons px-5'>
                            <a href='#contact'><button className='btn btn-outline-secondary mx-2 btn-rounded '>Contact Me</button></a>
                            <button className='btn btn-outline-secondary mx-2 '>Download Resume</button>
                        </div>
                    </Fade>
                </div>
                <div className='about__img col-lg-6 col-sm-12 col-md-6 mt-4'>
                    <Fade clear duration={3000}>
                        <img src={require('../../assets/images/profile-picture.png')} alt='Profile-pic'/>
                    </Fade>
                </div>
                

            </div>
        </div>
    </section>
  )
}

export default About