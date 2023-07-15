import './Header.css'

import logo from '../../assets/images/logo8.png'
import NavItem,{ NavItemDropDown } from '../NavItem/NavItem'

const Header = () => {
  return (
    
    <div className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand">
                    {/* Thriller World */}
             <img src={logo} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#hero" className="ellebs nav-link">Home</a></li>
                    <li className="nav-item">
                        <a href="#features" className="ellebs nav-link">Profile</a></li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Browse</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="ellebs  dropdown-item">Games</a></li>
                            <li><a href="#next" className="ellebs  dropdown-item">Games News </a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#faq" className="nav-link">Help !</a></li>
                    
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Header