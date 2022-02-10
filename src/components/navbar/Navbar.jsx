import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light mx-30 bg-white fixed-top">
            <div className="container p-0"> 
              <a className="navbar-brand p-2 text-center fw-bolder" href="#">
                <img src={require('../../assets/images/logo.png')} alt='logo'/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item px-2">
                    <a className="nav-link active fw-bolder" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link fw-bolder" href="#about">About</a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link fw-bolder" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link fw-bolder" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link fw-bolder" href="#contact">Contact</a>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
    </div>
    
  )
}

export default Navbar