import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import AddEmployeeModal from "./components/AddEmployeeModal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <p>Employee Management System</p>
        <div className="grid grid-cols-[2fr_0.5fr_3fr] w-full my-8">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter name, email or id...."
          />
          <Button variant="dark">Search</Button>
          <div className="flex justify-end">
            <Button variant="primary" size="lg" onClick={handleShow}>
              + Create
            </Button>
            <AddEmployeeModal show={show} handleClose={handleClose} />
          </div>
        </div>
        <DisplayCard />
      </div>
    </>
  );
}

export default App;
