import React from 'react'
import { Link} from "react-scroll";
import UilLinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import UilGithub from "@iconscout/react-unicons/icons/uil-github";
import resume from '../Aditya_Vashisht_Resume.pdf'
import '../css/Footer.css'


const styles = {
    width: '34px',
    height: '34px',
    fontSize: '30px',
    color: 'hsla(0,0%,100%,.45)',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '.5rem',
    transition: 'color .35s'
}

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-header-title">
                                    About
                                </div>
                                <div className="footer-content">
                                    Handcrafted with React and Bootstrap.
                                    <br/>
                                    <br/>
                                    © Aditya Vashisht 2020
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-3">
                                <div className="footer-header-title">
                                    Explore
                                </div>
                                <div className="footer-content">
                                <Link
                                    className="footer-link"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                     Home
                                </Link>

                                <Link
                                    className="footer-link"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                                <Link
                                    className="footer-link"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Portfolio
                                </Link>
                                <a className="footer-link"
                                href={resume}
                                    download
                                >
                                    Resume
                                </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-header-title">
                                    Follow
                                </div>
                                <div className="footer-icon-list">
                                    <a href="https://www.linkedin.com/in/adityavashisht" className="footer-icon">
                                        <UilLinkedIn style={styles}/>
                                    </a>
                                    <a href="https://github.com/vashishtaditya" className="footer-icon">
                                        <UilGithub style={styles}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer