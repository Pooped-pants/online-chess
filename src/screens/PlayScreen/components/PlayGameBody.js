import React from 'react'
import './PlayGameBody.css';

function PlayGameBody() {
    let Player1 = 'Jai'
    let Player2 = 'Parth'
    return (
        <div>
            <div className='Header'>
                {/* <div className='logo'></div> */}
                <h1>replace w logo</h1>
                Match Going On<br />Players: {Player1} , {Player2}
                
            </div>
        </div>
    )
}

export default PlayGameBody
