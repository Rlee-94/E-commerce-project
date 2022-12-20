import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Validation from "./Validation";
import FormSuccess from "./FormSuccess";

export default function ModalForm(props) {
  //Modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form submission state
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  //For form validation
  const { schema, register, reset, handleSubmit, errors } = Validation();

  const submitForm = (data, e) => {
    e.preventDefault();
    console.log(data);
    setIsSuccessfullySubmitted(true);
    reset();
  };

  return (
    <>
      {isSuccessfullySubmitted ? (
        <FormSuccess />
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton id="modal__header">
            <Modal.Title>Get Started Today!</Modal.Title>
          </Modal.Header>

          <Modal.Body id="modal">
            <Form id="form">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label id="form__label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  autoFocus
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <p className="form__error">{errors.firstName.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label id="form__label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <p className="form__error">{errors.lastName.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label id="form__label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="form__error">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label id="form__label">Telephone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="111-222-3333"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p className="form__error">{errors.phone.message}</p>
                )}
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer id="modal__footer">
            <Button id="modal__close" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              id="modal__submit"
              variant="primary"
              type="submit"
              onClick={handleSubmit(submitForm)}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {!isSuccessfullySubmitted && (
        <Button id={props.id} variant="primary" onClick={handleShow}>
          {props.buttonText}
        </Button>
      )}
    </>
  );
}
