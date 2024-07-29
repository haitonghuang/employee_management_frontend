import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmationModal = ({ isShow, handleOnCancel, handleOnDelete }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={isShow} onHide={handleOnCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee Record</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Permanently delete employee record?You can't undo this.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleOnDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
