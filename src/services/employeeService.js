import httpService from "./httpService";

export const addNewEmployee = async (employee) => {
  const response = await httpService.post("/create", employee);
};
