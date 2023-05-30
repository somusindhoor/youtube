import YTLogo from '../images/YTLogo.png'
import Notification from '../images/Notification.png'
import AddVideo from '../images/AddVideo.png'
import '../styles/navbar.css'

function  Navbar() {
    return(
        <div className="Navbar">
            <div className="logo">
                <img width={150} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='search' />
            </div>
            <div className="userOption">
                <img width={35} src={AddVideo} alt="" />
                <img width={35} src={Notification} alt="" />
                <p>S</p>
            </div>
        </div>
    )
}

export default Navbar;