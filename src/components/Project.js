import React from 'react'

function Project({ projObj }) {
    const { title, description, imageUrl } = projObj;

    return (
        <div className='text-center'>
            <img
                alt='text editor'
                className='img-fluid'
                src={imageUrl}
                style={{ margin: '0 auto' }}
            />
            <a href='https://github.com/CrowTrooper202/text-editor-pwa'>{title}</a>
            <p>{description}</p>
            <a href=' https://pure-garden-53924.herokuapp.com/'> deployed application</a>
        </div>
    )
}

export default Project