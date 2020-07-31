import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import Avatar from '../images/logo.png'
import Skills from '../components/Skills'
import Passions from '../components/Passions'
import Languages from '../components/Languages'
import UilSwipe from '@iconscout/react-unicons/icons/uil-arrow-left'
import '../css/About.css'

const styles= {
    color: "#d88a83",
    width: "24px"
}

const carouselStyles = {
    width: "100%",
    height: "100vh", 
    transform: 'translate(0px, 0px)', 
    transition: 'transform 0.5s ease 0s',
    flexBasis: '1019px',
    visibility: 'visible',
    height: 'auto',
    background: "red"
 }

const About = function() {
    return (
        <section className="about" id="about">
            <div className="about-wrapper">
                <div className="swipe-carousel">
                    <div className="carousel-wrapper">
                <SwipeableViews enableMouseEvents>
                    <div className="container"> 
                        <div className="row">
                            <div className="col-xs-12 offset-md-2 col-md-8">
                                <div className="row">
                                    <div className="order-2 order-md-1 col-md-8 left-styled">
                                        <div className="about-right">
                                             <div className="about-title">
                                                 <p className="about-title-heading">I'm Aditya</p>
                                                 <p className="about-title-subtitle">Full Stack Developer</p>
                                                 <div className="about-title-border"/>
                                             </div>
                                        <div className="about-description">
                                            Through passion and innovation, I build aesthetic software 
                                            and experiences to the highest standard. I’m technology
                                            agnostic, specialized in the intersection of user experience 
                                            design and development. I love learning new tricks, perfecting 
                                            my craft and stacking my skill set.
                                    </div>
                                    <div className="swipe-wrapper">
                                        <div className="swipe-button">
                                            <UilSwipe style={styles}/>
                                             <div className="swipe-text">
                                            Swipe
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="order-1 order-md-2 col-md-4 right-styled">
                                <div className="avatar-wrapper">
                                    <img className="avatar" src={Avatar} alt="gif"/> 
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 offset-md-2 col-md-8">
                    
                                    <div className="about-swiped-wrapper">
                                    <div className="row">
                                        <Skills/>
                                        <Passions/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SwipeableViews>
                </div>
                </div>
                </div>
        </section>
    )
}

export default About
