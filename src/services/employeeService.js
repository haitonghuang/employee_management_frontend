import httpService from "./httpService";

export function getAllEmployee() {
  const employeeList = httpService.get("/employees");
  return employeeList;
}
export function findEmployeeById(id) {
  const employee = httpService.get(`/find/${id}`);
  return employee;
}

export function addNewEmployee(employee) {
  return httpService.post("/create", employee);
}

export function deleteEmployee(id) {
  return httpService.delete(`/employees/${id}`);
}

export function updateEmployeeRecord(id, employee) {
  return httpService.put(`/employees/${id}`, employee);
}
