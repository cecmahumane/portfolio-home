import React from 'react'

const HeroSection = () => {
  return (
    <div className='photo-hero-text'>
      <div className='photo'>
        <img src='/images/headshot.jpg'  alt='Smiling male'/>
      </div>
      <div className='hero-text-button'>
        <h2 className='line1'>I'm Cecil </h2>
        <h2 className='line2'>Mahumane</h2>
        <p className='hero-quote'> I'm a self-taught Full Stack Web Developer, <br/> 
          from Ottawa in his 30s. Feel free to learn  <br/> 
          about me or just skip to the good part 😋.</p>
        <div className='portfolio-button'>
          <p>Look at my portfolio</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection