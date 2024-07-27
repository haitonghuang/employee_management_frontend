import httpService from "./httpService";

export function getAllEmployee() {
  const employeeList = httpService.get("/employees");
  return employeeList;
}

export function addNewEmployee(employee) {
  return httpService.post("/create", employee);
}
