import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const MobileHeroSection = () => {
  return (
    <div className='mobile-photo-hero-text'>
      <div className='mobile-photo'>
        <img src='/images/headshot.jpg'  alt='Smiling male'/>
      </div>
      <div className='mobile-hero-text-button'>
        <h2 className='mobile-line1'>I'm <span>Cecil</span> </h2>
        <h2 className='mobile-line2'>Mahumane</h2>
        <p className='mobile-hero-quote'> I'm a self-taught Full Stack Web Developer,
          from Ottawa in his 30s. Feel free to learn
          about me or just skip to the good part 😋.</p>
          <Link to='#projects' smooth><div className='mobile-portfolio-button'>
           <p>Look at my portfolio</p>
        </div></Link>
      </div>
    </div>
  )
}

export default MobileHeroSection