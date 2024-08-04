import { useState } from "react";
import Button from "react-bootstrap/Button";
import ConfirmationModal from "./ConfirmationModal";
import { deleteEmployee } from "../services/employeeService";

function DisplayCard({
  employeeId,
  employeeName,
  department,
  title,
  email,
  mobile,
  // isShowDeleteModal,
  setDeleteModal,
  setEditModal,
}) {
  // const [isRemoved, setRemoved] = useState(false);

  // const handleOnDelete = async () => {
  //   console.log("%cemployee id:", "color:blue;font-size:15px;", employeeId);
  //   try {
  //     await deleteEmployee(employeeId);
  //     setRemoved(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleOnDeleteBtn = () => {
    setDeleteModal({ isShowDeleteModal: true, employeeId: employeeId });
  };

  const handleOnEditBtn = () => {
    setEditModal({ isShowEditModal: true, employeeId: employeeId });
  };

  return (
    <>
      <div className="w-full border-l-4 border-indigo-500 divide-y divide-slate-700 my-8 shadow ">
        <div className="grid grid-cols-9 grid-flow-col space-x-4 justify-center items-center p-2">
          <div>{employeeId}</div>
          <div className="col-span-1">{employeeName}</div>
          <div className="col-span-1">{title}</div>
          <div className="col-span-1">{department}</div>
          <div className="col-span-2">{email}</div>
          <div className="col-span-1">{mobile}</div>
          <div className="flex justify-center gap-2 col-span-3">
            <Button
              variant="secondary"
              className="px-6"
              onClick={handleOnEditBtn}
            >
              Edit
            </Button>

            <Button variant="dark" onClick={handleOnDeleteBtn}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
