import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Portfolio.css'
import {Fade} from "react-reveal"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="container">
        <Fade clearName><h1 className='py-5 text-center'><u>My Portfolio</u></h1></Fade>
        <div className="row">
          <Fade bottom duration={2000}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="profile-card">
                <img src={require('../../assets/images/still_in_progress.png')} class="img img-responsive"/>
                  {/* <div className="profile-name">JOHN DOE</div>
                  <div className="profile-username">@johndoesurname</div> */}
                  <div className="profile-icons"><a className='text-secondary' href="#"><FaGithub/></a></div>
              </div>          
            </div>
          </Fade>
          <Fade bottom duration={2000} delay={300}>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="profile-card">
                  <img src={require('../../assets/images/still_in_progress.png')} class="img img-responsive"/>
                    {/* <div className="profile-name">JOHN DOE</div>
                    <div className="profile-username">@johndoesurname</div> */}
                    <div className="profile-icons"><a className='text-secondary' href="#"><FaGithub/></a></div>
                </div>
              </div>
          </Fade>
          <Fade bottom duration={2000} delay={500}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="profile-card">
                <img src={require('../../assets/images/still_in_progress.png')} class="img img-responsive"/>
                  {/* <div className="profile-name">JOHN DOE</div>
                  <div className="profile-username">@johndoesurname</div> */}
                  <div className="profile-icons"><a className='text-secondary' href="#"><FaGithub/></a></div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Portfolio