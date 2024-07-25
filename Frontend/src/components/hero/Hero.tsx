import React from 'react'
import './index.scss'
import {getImageUrl} from '../../../utils'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h1 className='hero-title'>Hi, I'm Sri</h1>
            <p className='hero-description'>I'm a full-stack developer with 5 years of experience in React and Spring Boot</p>
            <a className="hero-contact-btn" href='mailto: myemail@email.com'>Contact Me</a>
        </div>
        <img className='hero-img' src={getImageUrl("hero/heroImage.png")} alt='hero-iamge'/>
        <div className='hero-top-blur' />
        <div className='hero-bottom-blur' />
    </section>
  )
}

export default Hero