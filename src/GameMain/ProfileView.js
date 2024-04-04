import CloseIcon from '../assets/newIcon/×.png'
import Avatar1 from '../assets/newIcon/Avatar (1).png'
import Avatar3 from '../assets/newIcon/Avatar (3).png'
import Avatar4 from '../assets/newIcon/Avatar (4).png'
import Avatar5 from '../assets/newIcon/Avatar (5).png'
import Avatar from '../assets/newIcon/Avatar.png'

export default function ProfileView(props) {
    const {
        open, setOpen
    } = props
    return (
        <>
            {
                true && (
                    <div className="model profileView">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Promotion</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='profileEdit'>
                                            <div className='showImg'>
                                                <img src={Avatar} />
                                                <i class="bi bi-pencil-fill"></i>                                                                                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                </div>
                            </div>
                        </div>
                    </div >
                )
}
        </>
    )
}
