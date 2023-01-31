import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HeroSection = () => {
  return (
    <div className='photo-hero-text'>
      <div className='photo'>
        <img src='/images/headshot.jpg'  alt='Smiling male'/>
      </div>
      <div className='hero-text-button'>
        <h2 className='line1'>I'm <span>Cecil</span> </h2>
        <h2 className='line2'>Mahumane</h2>
        <p className='hero-quote'> I'm a self-taught Full Stack Web Developer, <br/> 
          from Ottawa in his 30s. Feel free to learn  <br/> 
          about me or just skip to the good part 😋.</p>
          <Link to='#projects' smooth><div className='portfolio-button'>
           <p>Look at my portfolio</p>
        </div></Link>
      </div>
    </div>
  )
}

export default HeroSection