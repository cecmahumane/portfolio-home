import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='/images/portfolio-signature.png' alt='Cecils signature' />
            </div>
            <div className='menu-options'>
                <ul className='menu-options-links'>
                    <Link to='#bio' smooth><li>About Me</li></Link>
                    <Link to='#projects' smooth><li>Portfolio</li></Link>
                    {/* <Link to='#contacts' smooth><li>Contact</li></Link> */}
                </ul>
                <a href='/CecilDeveloperResume-Feb1523.pdf' target="_blank" rel="noopener noreferrer"><div className='menu-options-cv'>
                    <p>Download CV</p>
                </div></a>
            </div>
        </div>
    )
}

export default Header