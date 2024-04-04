import React, { useState } from 'react'
import AvtarImg from '../assets/newIcon/Avatar.png'
import WalletImg from '../assets/newIcon/wallet.png'
import BankStatementIcon from '../assets/newIcon/bank-statement.png'
import GameStatementIcon from '../assets/newIcon/financial-statement.png'
import HelpDeskIcon from '../assets/newIcon/help-desk.png'
import SettingIcon from '../assets/newIcon/gear.png'
import HelpIcon from '../assets/newIcon/request.png'
import CoinImg from '../assets/newIcon/CoinImg.png'
import PromotionIcon from '../assets/newIcon/loudspeaker.png'
import GameBoxBg from '../assets/newIcon/Rectangle 175.png'
import Logo from '../assets/logoNew.png'
import MoneyWithIcon from '../assets/newIcon/money-withdrawal.png'
import OfflineGame from '../assets/newIcon/computer.png'
import OnnlineGame from '../assets/newIcon/browser.png'
import NotificationIcon from '../assets/newIcon/notificationIcon.png'
import ShopModelImg from '../assets/newIcon/store.png'
import WithdrwalStatementModel from '../Model/WithdrwalStatementModel'
import WithdrwalRequest from '../GameMain/WithdrwalRequest'
import SettingModel from '../GameMain/SettingModel'
import PromotionModelModel from '../GameMain/PromotionModel'
import AddmoneyModel from '../GameMain/Addmoney'
import ProfileView from '../GameMain/ProfileView'

export default function HomePage() {
    const [withdrwalStatemenOpen,setWithdrwalStatemenOpen]=useState(false)
    const [withdrwalRequestOpen,setWithdrwalRequestOpen]=useState(false)
    const [settingOpen,setSettingOpen]=useState(false)
    const [promotionModelOpen,setPromotionModelOpen]=useState(false)
    const [addmoneyModelOpen,setAddmoneyModelOpen]=useState(false)

    return (
        <>
            <div className="homePage">
                <div className='row'>
                    <div className='headHomePage'>
                        <div className="leftSidePage">
                            <div className="avtarShow">
                                <div className='imgShow'>
                                    <img src={AvtarImg} />
                                </div>
                                <span>Player</span>
                            </div>
                            <div className="coinShowHomePage">
                                <div className="showImg">
                                    <img src={CoinImg} />
                                    <h6>&#8377; 60</h6>
                                </div>
                                <div className='addIcon'>
                                    <span>&#43;</span>
                                </div>
                            </div>
                        </div>
                        <div className="walletImg">
                            <div className='walleteBox'>
                                <img src={WalletImg} />
                                <h6>&#8377; 100</h6>
                                <div className='addIcon'>
                                    <span>&#43;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeBody">
                    <div className='row'>
                        <div className='col-4 p-0'>
                            <div className='menuShow'>
                                    <div className='iconShow'>
                                        <img src={GameStatementIcon} />
                                        <span>Records</span>
                                </div>
                                    <div className='iconShow' onClick={()=>setAddmoneyModelOpen(!addmoneyModelOpen)}>
                                        <img src={ShopModelImg} />
                                        <span>Shop</span>
                                </div>
                                    <div className='iconShow' onClick={()=>setWithdrwalStatemenOpen(!withdrwalStatemenOpen)}>
                                        <img src={BankStatementIcon} />
                                        <span>Bank Statement</span>

                                </div>
                                    <div className='iconShow' onClick={()=>setWithdrwalRequestOpen(!withdrwalRequestOpen)}>
                                        <img src={MoneyWithIcon} />
                                        <span>Withdrawal Request</span>

                                </div>
                                    <div className='iconShow' onClick={()=>setSettingOpen(!settingOpen)}>
                                        <img src={SettingIcon} />
                                        <span>Setting</span>
                                </div>
                                    <div className='iconShow'>
                                        <img src={HelpDeskIcon} />
                                        <span>Support</span>
                                </div>
                                    <div className='iconShow' onClick={()=>setPromotionModelOpen(!promotionModelOpen)}>
                                        <img src={PromotionIcon} />
                                        <span>Promotion</span>
                                </div>
                                    <div className='iconShow'>
                                        <img src={HelpIcon} />
                                        <span>Help</span>
                                </div>

                            </div>
                        </div>
                        <div className='col-4 col-md-6'>
                            <div className='LogoShowHome'>
                                <div className="logoShowImg">
                                <img src={Logo} className='logoImg'/>
                                    </div>

                                <div className='GameShowHome'>
                                    <div className='gameShowBox'>
                                        <img src={OfflineGame} />
                                        <span>Offline Play</span>
                                    </div>
                                     <div className='gameShowBox'>
                                        <img src={OnnlineGame} />
                                        <span>Online Play</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 col-md-4">
                        <div className='menuShow mobileView' style={{display:"none"}}>
                                    <div className='iconShow' onClick={()=>setSettingOpen(!settingOpen)}>
                                        <img src={SettingIcon} />
                                        <span>Setting</span>
                                </div>
                                    <div className='iconShow'>
                                        <img src={HelpDeskIcon} />
                                        <span>Support</span>
                                </div>
                                    <div className='iconShow' onClick={()=>setPromotionModelOpen(!promotionModelOpen)}>
                                        <img src={PromotionIcon} />
                                        <span>Promotion</span>
                                </div>
                                    <div className='iconShow'>
                                        <img src={HelpIcon} />
                                        <span>Help</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <WithdrwalStatementModel open={withdrwalStatemenOpen} setOpen={setWithdrwalStatemenOpen}/>
            <WithdrwalRequest open={withdrwalRequestOpen} setOpen={setWithdrwalRequestOpen}/>
            <SettingModel open={settingOpen} setOpen={setSettingOpen}/>
            <AddmoneyModel open={addmoneyModelOpen} setOpen={setAddmoneyModelOpen}/>
            <PromotionModelModel open={promotionModelOpen} setOpen={setPromotionModelOpen}/>
            <AddmoneyModel open={addmoneyModelOpen} setOpen={setAddmoneyModelOpen}/>
            <ProfileView open={addmoneyModelOpen} setOpen={setAddmoneyModelOpen}/>

        </>
    )
}