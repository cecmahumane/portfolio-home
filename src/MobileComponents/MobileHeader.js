import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import SideMenu from './SideMenu'

const MobileHeader = () => {
    return (
        <div className='mobile-header'>
            <div className='mobile-logo'>
                <img src='/images/mobile-signature.png' alt='Cecils signature' />
            </div>
            {/* <div className='mobile-menu'> */}
            <SideMenu />
            {/* <img src='/images/three-dots-mobile.png' alt='Menu dots' /> */}
            {/* </div> */}
        </div>
    )
}

export default MobileHeader