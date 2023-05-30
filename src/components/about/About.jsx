import React from 'react'
import './about.css';
import Me from '../../assets/img/me.jpg';
import Skills from './Skills'
function About() {
  return (
    <section id='about' >
        <div className='container about__content'>
     
          <div className='row'>
              <div className='col-4'>
              <img src={Me} alt="" className='MyPhoto'/>
              </div>

              <div className='col-7'>
              <h3>Full Stack Web Developer</h3>
                <p><em>I am passionate about creating stunning and functional websites that provide an enjoyable user experience. I am eager to collaborate with clients and other developers to build amazing projects that will make a difference in the world. Thank you for visiting my portfolio
                  and I look forward to the opportunity to work with you!"</em></p>
                  <ul>
                    <li>Degree: Bachelor of Science in Information</li>
                    <li>Email: profferlhastlyfaner07@gmail.com</li>
                    <li>Address: Oriental Mindoro</li>
                    <li>Freelance: Available</li>
                  </ul>
              </div>
              <div>

              </div>
          </div>
         <hr />
          <Skills/>
        </div>
    </section>
  )
}

export default About