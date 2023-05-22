import React from 'react'

function appDetails(props){
    return(
        <div className='text-center'>
            <image
            alt='text editot'
            className='img-fluid'
            src='./utils/photos/jate-pwa.png'
            style={{margin:'0 auto'}}/>
            <a href='https://github.com/CrowTrooper202/text-editor-pwa'>Text Editor</a>
            <p>demos progressive web application</p>
            <a href=' https://pure-garden-53924.herokuapp.com/'> deployed application</a>
        </div>
    )
}

export default appDetails