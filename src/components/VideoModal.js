import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Projects from './Projects';

const VideoModal = (props) => {
    return (
        <Modal
        {...props}
        size={props.project.modalWidth}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-video-wrapper">
         <video className="modal-video" src={props.project.video} controls autoPlay muted/>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <p className="modal-close-button"onClick={props.onHide}>Close</p>
        </Modal.Footer>
      </Modal>
    )
}

export default VideoModal
