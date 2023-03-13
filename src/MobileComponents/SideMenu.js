import React, { useState } from 'react';

const SideMenu = () => {
    const [showMenu,setShowMenu] = useState(true);

    // let toggleMenu = () => {
    //     setShowMenu(true);
    // }

    return (
        <div>
            <div>
                <img src='/images/three-dots-mobile.png' alt='Menu dots'
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            {showMenu && <div className='slide-menu'>
                            Menu
                         </div>}
        </div>
    )
}

export default SideMenu