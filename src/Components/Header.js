import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src='/images/portfolio-signature.png' alt='Cecils signature'/>
        </div>
        <div className='menu-options'>
            <ul className='menu-options-links'>
                <li>About Me</li>
                <li>Portfolio</li>
                {/* <li>Contact</li> */}
            </ul>
            <a href='/CecilDeveloperResume.pdf' target="_blank" rel="noopener noreferrer"><div className='menu-options-cv'>
                <p>Download CV</p>
            </div></a>
        </div>
    </div>
  )
}

export default Header