import React from 'react'
import YoutubeEmbed from "./YoutubeEmbed";

const Bio = () => {
    return (
        <div className='bio' id='bio'>
            <h2 className='bio-title'>The <span className='subtitle'>Origins</span> of Old Man Cecil</h2>
            <div className='video-box-container'>
                <div className='video-box'>
                    <YoutubeEmbed embedId="dVCHcU--9aI" className='video'/>
                </div>
            </div>
            <div className='columns'>
                <div className='alignment-box'>
                    <div className='leftCol'>

                        <p>I like meatlovers pizza and classic movies. Some of my favourites are The Godfather, 
                            and 11 Angry Men. My favourite book is A Long Way Gone by Ishmael Beah. Dislikes hmm...
                            pineapple on pizza. </p>
                        <br />
                        
                    </div>

                    <div className='rightCol'>
                        <p><b>TL;DR:</b> From ballet, to photography to programming, I've done a lot and I think I have a lot to offer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio