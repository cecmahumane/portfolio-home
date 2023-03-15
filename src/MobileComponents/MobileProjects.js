import React from 'react'

const MobileProjects = () => {



    return (
        <div className='mobile-projects' id='projects'> 
            <h2 className='mobile-projects-title'>How I <span className='title-highlight'>Progressed</span> As A Developer</h2>
            <div className='mobile-project-tiles'>
                <div className='mobile-image-box'>
                    <div className='mobile-ecommerce'>
                        <a href='https://ecommerce.cecilmahumane.com' target="_blank" rel="noopener noreferrer">An E-Commerce Store Where You Can Make Orders.<br />Coming Soon</a>
                    </div>
                    <div className='mobile-reddit'>
                        <a href='https://reddit-client.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Clone Of The Reddit App, <br/>With No Search.</a>
                    </div>
                    <div className='mobile-quizzical'>
                        <a href='https://quizzical-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Pop-Culture Trivia App Where You Get A Score For Doing a Quiz.</a>
                    </div>
                    <div className='mobile-todo'>
                        <a href='https://todo-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Really Simple To-Do List App That Gets The Job Done.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileProjects