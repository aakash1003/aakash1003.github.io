import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {Fade} from 'react-reveal'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Fade bottom>
              <h1><u>Contact Info</u></h1>
              <p className='py-2'><a><GoLocation/></a><span className='px-3'>2/8 B Shanjar Colony, Sri Ganaganagar</span></p>
              <p className='py-2'><a><FiPhoneCall/></a><span  className='px-3'>+91-8426986758</span></p>
              <p className='py-2'><a><MdEmail /></a><span className='px-3'>ansusharma12345@gmail.com</span></p>
            </Fade>
            
          </div>
          <div className="col-lg-8">
            <Fade bottom>
              <h1><u>Contact Form</u></h1>
              <form>
                <div className='row'>
                  <div class="col-lg-6 col-md-12 mt-4">
                    <label for="exampleInputName" class="form-label">Name</label>
                    <input type="Name" class="form-control" id="exampleInputName"/>
                  </div>
                  <div class="col-lg-6 col-md-12 mt-4">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div class="col-lg-6 col-md-12 mt-4">
                    <label for="exampleInputSubject" class="form-label">Subject</label>
                    <input type="Subject" class="form-control" id="exampleInputSubject"/>
                  </div>
                  <div class="col-lg-6 col-md-12 mt-4">
                    <label for="exampleInputNumber" class="form-label">Phone No.  </label>
                    <input type="text" class="form-control" id="exampleInputNumber"/>
                  </div>
                  <div class="col-lg-12 col-md-12 mt-4">
                    <label for="exampleMessage" class="form-label">Message  </label>
                    <textarea name="message" class="form-control" id="exampleMessage">Enter text here...</textarea>
                  </div>
                </div>
              
                
                <button type="submit" class="btn btn-outline-secondary px-5 mt-3">Submit</button>
              </form>
            </Fade>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact