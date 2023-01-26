import React from 'react'

const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='name-rights'>
               <p className='name'>Cecil Mahumane</p> 
               <p className='rights'>All Rights Reserved 2023</p>
            </div>
            <div className='socials'>
                <img src='/images/GithubLogo.png' alt='Github logo'/>
                <img src='/images/PhoneNumber.png' alt='Phone symbol'/>
                <img src='/images/Envelope.png' alt='Envelope'/>
                <img src='/images/LinkedinLogo.png' alt='Linkedin logo'/>
            </div>
        </div>
    )
}

export default Footer;