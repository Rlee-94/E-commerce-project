import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id={props.id} variant="primary" onClick={handleShow}>
        {props.buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="modal__header">
          <Modal.Title>Get Started Today!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal">
          <Form id="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id="form__label">First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id="form__label">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id="form__label">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@email.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id="form__label">Telephone</Form.Label>
              <Form.Control type="tel" placeholder="(111) - 222 - 3333" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="modal__footer">
          <Button id="modal__close" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button id="modal__submit" variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
