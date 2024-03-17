import React, { useState } from 'react'
import { ReactComponent as CloseIcon } from '../assets/CloseIcon.svg'
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
export default function ShopModel(props) {
  const {
    userData,
    shopModelShow,
    setShopModelShow
  } = props
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    receipt: null,
    amount: null,
  });

  
  const handleCreateOrder = async (price, currency, amount,) => {
    axios.post('https://roulette-wheel-game.onrender.com/razorpay/create-order', { amount: price, receipt: `${amount + "Coin Purchase"}` })
      .then(response => {
        setOrderDetails({
          ...orderDetails,
          orderId: response.data.id
        })
        var options = {
          "key_id": "rzp_test_fUcGUlNQ7ATs5v",
          "key_secret": "Vn1LgZNmbDRoMzZcBvk44ejW",
          "amount": price,
          "currency": "INR",
          "name": "Test",
          "description": `${amount +"Coin Purchase"}`,
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
        shopModelShow && (
          <div className="shopModel" >
            <div className="shopBg"></div>
            <div className='shopModelShow'>
              <div className="shopModel-bg">
                <div className="model">
                  <button className="closeModel" onClick={() => setShopModelShow(false)}><CloseIcon /></button>
                  <div className="model-head">
                    <div className="shopTitle">

                      <h6>Add Coins</h6>
                    </div>
                  </div>
                  <div className="model-body">
                    <table>
                      <thead>
                        <tr>
                          <th>Coins</th>
                          <th>Price</th>
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
            </div>
          </div>
        )
      }
    </>
  )
}
