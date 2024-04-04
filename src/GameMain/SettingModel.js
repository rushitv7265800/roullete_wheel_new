import { ReactComponent as PhonePe } from '../assets/newIcon/phonepe.svg'
import GooglePay from '../assets/newIcon/pngwing.com (1).png'
import Paytm from '../assets/newIcon/pngwing.com.png'
import Upi from '../assets/newIcon/UPI-Color.png'
import CloseIcon from '../assets/newIcon/×.png'

export default function SettingModel(props) {
    const {
        open, setOpen
    } = props
    return (
        <>
            {
                open && (
                    <div className="model settingModel">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Setting</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                                <div className='settingBox'>
                                    <i class="bi bi-volume-up-fill"></i>
                                    <h6>Sound</h6>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    </div>
                                </div>
                                <div className='settingBox'>
                                    <i class="bi bi-phone-vibrate-fill"></i>    
                                    <h6>Sound</h6>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
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
