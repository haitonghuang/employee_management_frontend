import Button from "react-bootstrap/Button";

function DisplayCard() {
  return (
    <div className="w-full border-l-4 border-indigo-500 divide-y divide-slate-700">
      <div className="grid grid-cols-6 grid-flow-col space-x-4 justify-center items-center">
        <div>000010</div>
        <div className="col-span-2">John Doe</div>
        <div className="col-span-2">johndoe@gmail.com</div>
        <div className="flex justify-center gap-4">
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
