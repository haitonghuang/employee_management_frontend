import { useEffect, useState } from "react";
import { getAllEmployee } from "../services/employeeService";

export const useFetchAllEmployee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllEmployeeData = async () => {
    setIsLoading(false);
    setEmployeeList([]);
    setError("");

    try {
      setIsLoading(true);
      const response = await getAllEmployee();
      console.log(response.data);
      setIsLoading(false);
      setEmployeeList(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getAllEmployeeData();
  }, []);

  //trigger once

  return { employeeList, isLoading, error, getAllEmployeeData };
};
