import React from 'react'
import CloseIcon from '../assets/newIcon/×.png'

export default function WithdrwalRequest() {
    return (
        <div className="model withdrwalReq">
            <div className="modelMain">
                <div className='modelHead'>
                    <h6>Withdrwal Request</h6>
                    <div className="closeIcon">
                        <img src={CloseIcon} />
                    </div>
                </div>
                <div className='modelBody'>
                    <h6></h6>
                </div>
            </div>
        </div>
    )
}
