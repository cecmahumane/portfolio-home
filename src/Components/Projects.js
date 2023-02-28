import React from 'react'

const Projects = () => {



    return (
        <div className='projects' id='projects'>
            <h2 className='projects-title'>What I'm <span className='title-highlight'>Developing</span>These Days</h2>
            <div className='project-tiles'>
                <div className='image-box'>
                    <div className='ecommerce'>
                        <a href='http://ecommerce.cecilmahumane.com' target="_blank" rel="noopener noreferrer">An E-Commerce Store Where You Can Make Orders.</a>
                    </div>
                    <img src='/images/DotSquare.png' alt='Dots in a square shape' className='dot' />
                    <img src='/images/DotSquare.png' alt='Dots in a square shape' className='dot-two' />
                    <div className='reddit'>
                        <a href='http://reddit-client.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Clone Of The Reddit App, <br />With No Search.</a>
                    </div>
                    <div className='quizzical'>
                        <a href='http://quizzical-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Pop-Culture Trivia App Where You Get A Score For Doing a Quiz.</a>
                    </div>
                    <img src='/images/DotSquare.png' alt='Dots in a square shape' className='dot-three' />
                    <div className='todo'>
                        <a href='http://todo-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Really Simple To-Do List App That Gets The Job Done.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects