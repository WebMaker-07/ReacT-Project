import React from 'react';
import './home.css';
import SocialAccount from './SocialAccount';
import Nav from '../nav/Nav';

function Home() {
  return (
    <section id='home' >
        <div>
        <Nav/>
        </div>
        <div className='container header__title'>
        <h1>Proffer Lhastly A. Faner</h1>
        <h6>I'm a passionate <strong>Web Developer</strong> from Philippines</h6>
       
        <SocialAccount/>
        </div>
    </section>
  )
}

export default Home