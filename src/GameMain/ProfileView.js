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
                open && (
                    <div className="model profileView">
                        <div className="modelMain">
                            <div className='modelHead'>
                                <h6>Profile</h6>
                                <div className="closeIcon" onClick={() => setOpen(false)}>
                                    <img src={CloseIcon} />
                                </div>
                            </div>
                            <div className='modelBody'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='profileEdit'>
                                            <div className='profileDetialsShow'>
                                                <div className='showImg'>
                                                    <img src={Avatar} />
                                                    <i class="bi bi-pencil-fill"></i>
                                                </div>
                                                <div className='profileDetails'>
                                                    <h6>Player</h6>
                                                    <h6>+91 1234567890</h6>
                                                </div>
                                            </div>
                                            <div className="profileAvtarProfile">
                                                <div className='showImg'>
                                                    <img src={Avatar1} />
                                                </div>
                                                <div className='showImg'>
                                                    <img src={Avatar} />
                                                </div>
                                                <div className='showImg'>
                                                    <img src={Avatar3} />
                                                </div>
                                                <div className='showImg'>
                                                    <img src={Avatar4} />
                                                </div>
                                                <div className='showImg'>
                                                    <img src={Avatar5} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className='col-6'>
                                    <form>
                                    <div className='inputProfileBox'>
                                        <div className='inputShowProfile'>
                                            <label>User Name</label>
                                            <input type='text' />
                                        </div>
                                        <div className='inputShowProfile'>
                                            <label>Email</label>
                                            <input type='text' />
                                        </div>
                                        <div className='inputShowProfile'>
                                            <label>Phone No.</label>
                                            <input type='number' />
                                        </div>
                                        <div className='inputShowProfile'>
                                            <label>Password</label>
                                            <input type='number' />
                                        </div>
                                    </div>
                                    <button>Submit</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}
