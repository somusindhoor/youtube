import YTLogo from '../images/YTLogo.png'
import Notification from '../images/Notification.png'
import AddVideo from '../images/AddVideo.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img width={75} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='search' />
            </div>
            <div className="userOption">
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/add-video">AddVideo</Link>

                </div>
                <img width={35} src={AddVideo} alt="" />
                <img width={35} src={Notification} alt="" />
                <div className="profile">
                    <h3>S</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;