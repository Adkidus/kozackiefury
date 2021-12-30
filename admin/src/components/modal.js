import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalApp = props => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.body}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {props.footer}
        </Modal.Footer>
      </Modal>
    );
}

export default ModalApp;