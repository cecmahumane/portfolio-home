import React from 'react'
import MobileYoutubeEmbed from './MobileYoutubeEmbed'

const MobileBio = () => {
    return (
        <div className='mobile-bio' id='mobile-bio'>
            <h2 className='mobile-bio-title'>The <span className='subtitle'>Origins</span> of Old Man Cecil</h2>
            <div className='mobile-video-box-container'>
                <div className='mobile-video-box'>
                    <MobileYoutubeEmbed embedId="dVCHcU--9aI" className='video' />
                </div>
            </div>
            <div className='mobile-columns'>
                <div className='mobile-alignment-box'>
                        <p className='mobile-p1'>I like meatlovers pizza and classic movies. Some of my favourites are The Godfather, 
                            and 11 Angry Men. My favourite book is A Long Way Gone by Ishmael Beah. Dislikes hmm...
                            pineapple on pizza. </p>
                        <br />
                        <p className='mobile-p2'><b>TL;DR:</b> From ballet, to photography to programming, I've done a lot and I think I have a lot to offer.</p>
                </div>
            </div>
        </div>
    )
}

export default MobileBio