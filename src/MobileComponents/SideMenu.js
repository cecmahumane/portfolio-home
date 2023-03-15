import React, { useState } from 'react';
import SideMenuContent from './SideMenuContent';

const SideMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeSideMenu = () => {
        setShowMenu(false);
    }


    return (
        <div>
            <div>
                <img className='mobile-menu' src='/images/three-dots-mobile.png' alt='Menu dots'
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            {showMenu && <div>
                <div className='slide-menu'>
                    <SideMenuContent closeSideMenu={closeSideMenu}/>
                </div>
                <div className='slide-menu-mask'
                    onClick={() => setShowMenu(false)}
                    >

                </div>
            </div>
            }
        </div>
    )
}

export default SideMenu