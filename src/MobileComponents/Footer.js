import React from 'react'

const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='name-rights'>
                <p className='name'>Cecil Mahumane</p>
                <p className='rights'>All Rights Reserved 2023</p>
            </div>
            <div className='socials'>
                <a href='https://www.github.com/cecmahumane' target="_blank" rel="noopener noreferrer">
                    <img src='/images/GithubLogo.png' alt='Github logo' />
                </a>
                <a target="_blank" rel="noopener noreferrer" >
                    <img src='/images/PhoneNumber.png' alt='Phone symbol' onClick={() => {
                        navigator.clipboard.writeText("1-613-795-8763")
                        alert('Phone number added to clipboard');
                    }}/>
                </a>

                <img src='/images/Envelope.png' alt='Envelope' onClick={() => window.location = 'mailto:cecmahumane@gmail.com'} />

                <a href='https://www.linkedin.com/in/cecil-mahumane-b756433a/' target="_blank" rel="noopener noreferrer">
                    <img src='/images/LinkedinLogo.png' alt='Linkedin logo' />
                </a>
            </div>
        </div>
    )
}

export default Footer;