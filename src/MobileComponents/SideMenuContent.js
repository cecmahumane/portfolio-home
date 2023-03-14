import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const SideMenuContent = ({closeSideMenu}) => {
  return (
    <div>
        <ul className='nav-list'>
            <Link to='#mobile-bio' smooth onClick={() => closeSideMenu()}><li className='list'><img src='/images/Question.png'/>About</li></Link>
            <Link to='#projects' smooth onClick={() => closeSideMenu()}><li className='list'><img src='/images/RocketLaunch.png'/>Portfolio</li></Link>
            <li className='list' onClick={() => window.location = 'mailto:cecmahumane@gmail.com'}><img src='/images/Chats.png'/>Contact</li>
            <a href='/CecilDeveloperResume.pdf' target="_blank" rel="noopener noreferrer"><li className='cv-download'>Download CV</li></a>
        </ul>
    </div>
  )
}

export default SideMenuContent