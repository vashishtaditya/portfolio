import React from 'react'
import Projects from "../components/Projects";
import '../css/Portfolio.css'

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="portfolio-wrapper">
                <div className="container">
                    <div className="row">
                        <Projects/>
                    </div>
                </div>
            </div>
        </section>
    )
}
