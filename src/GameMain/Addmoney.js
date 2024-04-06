import CloseIcon from '../assets/newIcon/×.png'
import React, { useState } from 'react'
import CoinImage from '../assets/CoinImg.png'
import axios from 'axios'
import { baseURL } from '../App'

const amountDetail = [
    { amount: 200, price: 50 },
    { amount: 400, price: 100 },
    { amount: 1200, price: 200 },
    { amount: 2000, price: 300 },
    { amount: 3000, price: 400 },
    { amount: 3500, price: 500 },
]
export default function AddmoneyModel(props) {
    const {
        open, setOpen
    } = props
    const [orderDetails, setOrderDetails] = useState({
        orderId: null,
        currency: null,
        receipt: null,
        amount: null,
    });


    const handleCreateOrder = async (price, currency, amount,) => {
        const amountAdd = price * 100
        axios.post('https://roulette-wheel-game.onrender.com/razorpay/create-order', { amount: amountAdd, receipt: `${amount + "Coin Purchase"}` })
            .then(response => {
                setOrderDetails({
                    ...orderDetails,
                    orderId: response.data?.order?.id
                })
                var options = {
                    "key": "rzp_test_HQF5r9XZ9o5lVJ",
                    // "key_secret": "scvW6xIBUqOv2e4khSxr3D8k",
                    "amount": price,
                    "currency": "INR",
                    "name": "Test",
                    "description": `${amount + "Coin Purchase"}`,
                    "order_id": orderDetails?.orderId,
                    handler: function (response) {
                        alert(response.razorpay_payment_id);
                    },
                    "prefill": {
                        "name": "Test",
                        "email": "test@gmail.com",
                        "contact": "1111111111",
                    },
                    "notes": {
                        "address": "note value",
                    },
                    "theme": {
                        "color": "#F37254"
                    }
                };

                var rzp1 = new window.Razorpay(options)
                rzp1.open();
            })
    }

    return (
        <>
            {
                open && (
                    <div className="model shopNewModel">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Shop</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            amountDetail?.map((item) => {
                                                return (

                                                    <tr>
                                                        <td>
                                                            <div className="priceShow">
                                                                <img src={CoinImage} />
                                                                <h6>{item?.amount}</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => handleCreateOrder(item?.price, 'IND', item?.amount)}>&#8377; {item?.price}</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
