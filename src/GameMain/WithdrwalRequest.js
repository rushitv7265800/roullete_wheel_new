import React from 'react'
import { ReactComponent as PhonePe } from '../assets/newIcon/phonepe.svg'
import GooglePay from '../assets/newIcon/pngwing.com (1).png'
import Paytm from '../assets/newIcon/pngwing.com.png'
import Upi from '../assets/newIcon/UPI-Color.png'
import CloseIcon from '../assets/newIcon/×.png'

export default function WithdrwalRequest(props) {
    const {
        open, setOpen
    } = props
    return (
        <>
            {
                open && (
                    <div className="model withdrwalReq">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Withdrwal Request</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                                <h6>Available deposit Balance<span> ₹15,890.0</span></h6>
                                <h6>Available Withdrawable Balance     <span>₹10,890.0 </span></h6>
                                <form>
                                    <div className='modelInput'>
                                        <input type="number" placeholder='Enter Amount' />
                                        <select>
                                            <option>Paytm</option>
                                            <option>Google Pay</option>
                                            <option>PhonePe</option>
                                            <option>UPI</option>
                                        </select>
                                    </div>
                                    <button>Withdraw</button>
                                </form>
                                <div className='paymentShow'>
                                    <img src={Paytm} />
                                    <PhonePe />
                                    <img src={GooglePay} />
                                    <img src={Upi} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
