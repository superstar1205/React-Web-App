import React from 'react'
import "./NetworkMessage.css"

function NetworkMessage(props) {
    return (
        <div className='networkMessage'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h3>{props.message}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkMessage
