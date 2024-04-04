import CloseIcon from '../assets/newIcon/×.png'
import PromotionModelModelBanner from '../assets/newIcon/promotionModel.png'

export default function PromotionModelModel(props) {
    const {
        open, setOpen
    } = props
    return (
        <>
            {
                open && (
                    <div className="model promotionModel">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Promotion</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                              <h6>Offer</h6>
                              <img src={PromotionModelModelBanner}/>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
