import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const MobileHeader = () => {
    return (
        <div className='mobile-header'>
            <div className='mobile-logo'>
                <img src='/images/mobile-signature.png' alt='Cecils signature' />
            </div>
            <div className='mobile-menu'>
                <img src='/images/three-dots-mobile.png' alt='Menu dots' />
            </div>
        </div>
    )
}

export default MobileHeader