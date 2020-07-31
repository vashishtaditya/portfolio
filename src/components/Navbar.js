import React from 'react'
import { Link} from "react-scroll";
import '../css/Navbar.css'
import logo from '../images/logo.png'
import resume from '../Aditya_Vashisht_Resume.pdf'


const Navbar = (props) => {
  
    return (
        <div className="nav" id="navbar">
        <div id="nav" className={ !props.updateInView ? "nav-content white-nav" : "nav-content"}>
            <div className="Brand">
                <img src={logo}
                     className="Brand-logo"
                     alt="Logo"
                />
                <p className="Brand-name">Aditya Vashisht</p>
            </div>
            <div className="nav-items-wrapper">
          <div className="nav-items">
            
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
           
          
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
           
         
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
              <a
              href={resume}
                download
              >
                Resume
              </a>
        
          </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar