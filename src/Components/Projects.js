import React from 'react'

const Projects = () => {



    return (
        <div className='projects'>
            <h2 className='projects-title'>My<span className='title-highlight'>Projects</span></h2>
            <div className='project-tiles'>
                <div className='image-box'>
                    <div className='ecommerce'>
                        <a target="_blank" rel="noopener noreferrer">E-commerce App <br />Coming Soon</a>
                    </div>
                    <div className='reddit'>
                        <a href='http://reddit-client.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Reddit Clone</a>
                    </div>
                    <div className='quizzical'>
                        <a href='http://quizzical-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Quizzical App</a>
                    </div>
                    <div className='todo'>
                        <a href='http://todo-app.cecilmahumane.com' target="_blank" rel="noopener noreferrer">Todo App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects