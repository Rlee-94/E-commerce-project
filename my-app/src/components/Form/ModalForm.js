import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Please enter a valid email"),
  phone: Yup.string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("Phone number is required"),
});

export default function ModalForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

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
                type="text"
                placeholder="First name"
                name="firstName"
                autoFocus
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="form_error">{errors.firstName.message}</p>
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
                <p className="form_error">{errors.lastName.message}</p>
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
                <p className="form_error">{errors.email.message}</p>
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
                <p className="form_error">{errors.phone.message}</p>
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
    </>
  );
}
