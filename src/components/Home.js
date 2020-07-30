import React from 'react'
import Hello from '../images/hello.png'
import { Link } from "react-scroll";
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down'
import '../css/Home.css'
import { useInView } from 'react-intersection-observer'

const styles= {
    color: "#d88a83",
    width: "24px"
}

const Home = ({updateInView}) => {

    const [ref, inView] = useInView({
        threshold: 0
      });
    updateInView(inView)
    return (
        <section id="home" ref={ref}>
            <div className="home-wrapper">
                <div className="home-left">
                    <img className="home-banner" src={Hello} alt="Hello"/>
                    <div className="scroll-down-link-wrapper">
                        <div className="scroll-down-link">
                        <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                            <div className="scroll-down-link-inner">
                        <UilDown className="scroll-down-icon" style={styles}/>
                            <div className="home-scroll-down-text">
                                Scroll down
                            </div>
                            </div>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
