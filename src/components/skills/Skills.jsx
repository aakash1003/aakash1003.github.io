import React from 'react'
import './Skills.css'
import {Bounce, Fade} from 'react-reveal'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import {FcLinux} from 'react-icons/fc'
import {DiDocker, DiJavascript} from 'react-icons/di'
import {SiKubernetes, SiTerraform} from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills">
        <div className='container pb-1'>
            <h1 className='text-center'>My Skills</h1>
            <div className='skills_section'>
              <div className='row'>
                <div className='img col-lg-6 col-sm-12'>
                  <Fade clear><img className='img-1' src={require('../../assets/images/pro.png')}/></Fade>
                  <Fade bottom forever={true} duration={3000} distance="40px" cascade big><img className='img-2' src={require('../../assets/images/img-1.png')}/></Fade>
                  <Fade bottom forever={true} duration={3000} distance="20px" cascade big><img className='img-3' src={require('../../assets/images/img-2.png')}/></Fade>
                </div>
                <div className='skills_content p-5 col-lg-6 col-sm-12'>
                  <div className='content p-3'>               
                    <Fade clear><span>Front-end Skills</span></Fade>
                    <div className='skills_icons p-3'>
                      <div className='row text-center'>
                        <Fade right>

                        
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><FaHtml5 className='skills_icon' color='#EF6028'/></a>
                            <p>HTML</p>
                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><FaCss3 className='skills_icon' color='#2162AF'/></a>
                            <p>CSS</p>

                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><DiJavascript className='skills_icon' color='#D6BA32'/></a>
                            <p>JavaScript</p>

                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><FaReact className='skills_icon' color='#5ED3F3'/></a>
                            <p>React</p>

                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><FaBootstrap className='skills_icon' color='#533B78'/></a>
                            <p>Bootstrap</p>

                          </div>
                        </Fade>
                      </div>
                    </div> 
                  </div>


                  <div className='content p-3'>               
                  <Fade clear><span>Devops Skills</span></Fade>
                    
                    <div className='skills_icons p-3'>
                      <div className='row text-center'>
                        <Fade right>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><FcLinux className='skills_icon'/></a>
                            <p>Linux</p>
                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><DiDocker className='skills_icon' color='#2496ED'/></a>
                            <p>Docker</p>

                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><SiKubernetes className='skills_icon' color='#3069DE'/></a>
                            <p>Kubernetes</p>

                          </div>
                          <div className='col-lg-4 col-sm-6 col-md-4'>
                            <a><SiTerraform className='skills_icon' color='#594CDE'/></a>
                            <p>Terraform</p>

                          </div>
                        </Fade>
                      
                      </div>
                    </div> 
                  </div>
                </div>

                
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default Skills