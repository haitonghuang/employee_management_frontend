import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import NewEmployeeModal from "./components/NewEmployeeModal";
import { useFetchAllEmployee } from "./hooks/useFetchAllEmployee";
import Spinner from "react-bootstrap/Spinner";
import { addNewEmployee } from "./services/employeeService";
import SubmissionResultModal from "./components/SubmissionResultModal";
import ConfirmationModal from "./components/ConfirmationModal";
import { deleteEmployee } from "./services/employeeService";
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for popup
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const { employeeList, isLoading, getAllEmployeeData } = useFetchAllEmployee();
  const [employees, setEmployees] = useState([]);

  const [isRemoved, setRemoved] = useState(false);

  useEffect(() => {
    console.log("hihi");
    if (employeeList.length) {
      setEmployees(employeeList);
    } else {
      setEmployees([]);
    }
  }, [employeeList]);

  const handleOnSave = async (newEmployee) => {
    setShowSubmissionModal(false);
    try {
      console.log("new employee:", newEmployee);
      const response = await addNewEmployee(newEmployee);
      console.log(response);
      setShowSubmissionModal(true);
      setModalTitle("Submission Received");
      setModalDescription("You have successfully added a new record");
      setShow(false);
      await getAllEmployeeData();
    } catch (err) {
      console.log(err);
      setShowSubmissionModal(true);
      setModalTitle("Submission Failed");
      setModalDescription("Error occurs. Please try again.");
      setShow(false);
    }
  };

  const handleOnDelete = async () => {
    console.log(
      "%cemployee id:",
      "color:blue;font-size:15px;",
      selectedEmployeeId
    );
    try {
      await deleteEmployee(selectedEmployeeId);
      setRemoved(false);
    } catch (err) {
      console.log(err);
    }
  };
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);
  const openDeleteModal = (data) => {
    console.log(data);
    setRemoved(data.isShowDeleteModal);
    setSelectedEmployeeId(data.employeeId);
  };

  return (
    <>
      <div>
        <p className="text-3xl font-bold">Employee Management System</p>
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
            <NewEmployeeModal
              show={show}
              handleClose={handleClose}
              handleOnSave={handleOnSave}
            />
          </div>
        </div>
        {/* Submission result popup */}
        <SubmissionResultModal
          isShow={showSubmissionModal}
          handleClose={() => setShowSubmissionModal(false)}
          title={modalTitle}
          description={modalDescription}
        />
        <div>
          {isLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <div>
              {employees.length === 0 ? (
                <div className="text-2xl font-bold">No Record</div>
              ) : (
                employees.map((employee) => (
                  <DisplayCard
                    key={employee.id}
                    employeeId={employee.id}
                    employeeName={employee.fullName}
                    department={employee.department}
                    title={employee.title}
                    email={employee.email}
                    mobile={employee.phoneNumber}
                    setDeleteModal={openDeleteModal}
                  />
                ))
              )}
            </div>
          )}
        </div>
        <ConfirmationModal
          isShow={isRemoved}
          handleOnCancel={() => setRemoved(false)}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </>
  );
}

export default App;
