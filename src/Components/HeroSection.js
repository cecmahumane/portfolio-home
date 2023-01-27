import React from 'react'

const HeroSection = () => {
  return (
    <div className='photo-hero-text'>
      <div className='photo'>
        <img src='/images/headshot.jpg' alt='Smiling male'/>
      </div>
      <div className='hero-text-button'>
        <h2 className='line1'>I was born</h2>
        <h2 className='line2'>Different...</h2>
        <p className='hero-quote'>Not saying I’m special or something. But, <br/> 
          as a self-taught developer in his 30s, what <br/> 
          I bring to the table is pretty funny.</p>
        <div className='portfolio-button'>
          <p>Just look at my portfolio</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection