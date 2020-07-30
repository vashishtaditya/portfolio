import React, {useState} from 'react'
import Tilt from 'react-tilt'
import HolaApp from '../images/Hola-app.png'
import HolaDashboard from '../images/Hola-dashboard.png'
import HolaAppVideo from '../video/AppVideo.mov'
import HolaDashBoardVideo from '../video/dashboard.mov'
import VideoModal from './VideoModal'

const projects = [
    {
        id:1,
        name: "Hola",
        img: HolaApp,
        video: HolaAppVideo,
        description: "A smart visitor management system built to securely capture visitor information, prints visitor badges with QR code to seemlesly check out at the end of the visit. Written in React Native and consumed REST Api's in Python and Django DRF.",
        descriptionClass: "project-description project-description-right",
        row: "portfolio-row",
        modalWidth: "md"
    },
    {
        id:2,
        name: "Hola - Dashboard",
        img: HolaDashboard,
        video: HolaDashBoardVideo,
        description: "This is an admin dashboard, works alongside Hola application and is a catalog of the all the visits that have taken place. Written in React, consumed REST Api's in Python and Django DRF.",
        descriptionClass: "project-description project-description-left",
        row: "portfolio-row row-reverse",
        modalWidth: "lg"
    }
]

const styles = {
    transform: "rotateX(0deg) rotateY(0deg)"
}

class Projects extends React.Component {
    state ={
        modal: 0
    }
   
    showModal = value => {
        this.setState({ modal: value})
    }

    hideModal = value => {
        this.setState({ modal: 0})
    }

    render(){
    return (
        <div className="offset-md-2 col-md-8">
            <div className="portfolio-title-wrapper" style={{marginBottom:"5rem"}}>
                <div className="portfolio-title">Portfolio</div>
                <div className="portfolio-subtitle">Most recent work</div>
            </div>
            {projects.map(project => {
                return <div className={project.row} style={{marginBottom:"8rem"}}>
                    <Tilt className="project-img-wrapper project-img-card" options={{ max :15, scale: "1.01" }} >
                        <img src={project.img} id="tilt-img" className="project-img" style={styles}/>
                    </Tilt>
                    <div className={project.descriptionClass}>
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description-text">{project.description}</p>
                        <p className="project-video-button" onClick={ () => this.showModal(project.id)}>Play video</p>
                        <VideoModal  show={this.state.modal === project.id}
                                onHide={() => this.hideModal(project.id)} project={project}/>
                    </div>
                </div>
            })}
        </div>
    )
}
}

export default Projects
