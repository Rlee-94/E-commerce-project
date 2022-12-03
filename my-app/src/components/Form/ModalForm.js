import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lasttName: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export default function ModalForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

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
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label id="form__label">First Name</Form.Label>
              <Form.Control
                id="form__input"
                type="text"
                placeholder="First name"
                autoFocus
                {...register("firstName")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label id="form__label">Last Name</Form.Label>
              <Form.Control
                id="form__input"
                type="text"
                placeholder="Last name"
                {...register("lastName")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label id="form__label">Email address</Form.Label>
              <Form.Control
                id="form__input"
                type="email"
                placeholder="name@email.com"
                {...register("email")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label id="form__label">Telephone</Form.Label>
              <Form.Control
                id="form__input"
                type="tel"
                placeholder="(111) - 222 - 3333"
                {...register("phone")}
              />
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
    </>
  );
}
