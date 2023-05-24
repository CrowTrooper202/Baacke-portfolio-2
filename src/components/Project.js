import React from 'react'

function Project({ projObj }) {
    const { title, description, imageUrl, gitHub,demo } = projObj;

    return (
        <div className='text-center'>
            <img
                alt='text editor'
                className='img-fluid'
                src={imageUrl}
                style={{ margin: '0 auto' }}
            />
            <a href={gitHub}>{title}</a>
            <p>{description}</p>
            <a href={demo}> deployed application</a>
        </div>
    )
}

export default Project