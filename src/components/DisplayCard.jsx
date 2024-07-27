import Button from "react-bootstrap/Button";

function DisplayCard({
  employeeId,
  employeeName,
  department,
  title,
  email,
  mobile,
}) {
  return (
    <div className="w-full border-l-4 border-indigo-500 divide-y divide-slate-700 my-8 shadow ">
      <div className="grid grid-cols-9 grid-flow-col space-x-4 justify-center items-center p-2">
        <div>{employeeId}</div>
        <div className="col-span-1">{employeeName}</div>
        <div className="col-span-1">{title}</div>
        <div className="col-span-1">{department}</div>
        <div className="col-span-2">{email}</div>
        <div className="col-span-1">{mobile}</div>
        <div className="flex justify-center gap-2 col-span-3">
          <Button variant="secondary" className="px-6">
            Edit
          </Button>

          <Button variant="dark">Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
