/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Name is a required field."),
  email: yup.string().email().required("Email is a required field."),
  title: yup.string().required("Job title is a required field."),
  department: yup.string().required("Department is a required field."),
  phoneNumber: yup.string().required("Phone Number is required."),
});

export default function NewEmployeeModal({ show, handleClose, handleOnSave }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (newEmployee) => {
    console.log(newEmployee);
    await handleOnSave(newEmployee);
    reset();
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                name="fullName"
                {...register("fullName")}
              />
            </Form.Group>
            {errors.fullName && (
              <Alert variant="danger">{errors.fullName.message}</Alert>
            )}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" {...register("email")} />
            </Form.Group>
            {errors.email && (
              <Alert variant="danger">{errors.email.message}</Alert>
            )}
            <Form.Group className="mb-3" controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" name="title" {...register("title")} />
            </Form.Group>
            {errors.title && (
              <Alert variant="danger">{errors.title.message}</Alert>
            )}
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                {...register("department")}
              />
            </Form.Group>
            {errors.department && (
              <Alert variant="danger">{errors.department.message}</Alert>
            )}
            <Form.Group className="mb-3" controlId="contactNo">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                {...register("phoneNumber")}
              />
            </Form.Group>
            {errors.phoneNumber && (
              <Alert variant="danger">{errors.phoneNumber.message}</Alert>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onSubmitHandler)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
