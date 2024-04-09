/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function NewEmployeeModal({ show, handleClose, handleOnSave }) {
	return (
		<div>
			{" "}
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
							<Form.Control type="text" placeholder="name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="jobTitle">
							<Form.Label>Job Title</Form.Label>
							<Form.Control type="text" placeholder="Job title" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="department">
							<Form.Label>Department</Form.Label>
							<Form.Control type="text" placeholder="department" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="contactNo">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control type="text" placeholder="mobile or phone" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleOnSave}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
