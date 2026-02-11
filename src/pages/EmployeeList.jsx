import React from "react";
import EmployeeTable from "../components/EmployeeTable";

const EmployeeList = () => {
  const employees = [
    {
      id: "EMP001",
      name: "John Doe",
      department: "Engineering",
      designation: "Frontend Developer",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      department: "Human Resources",
      designation: "HR Manager",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Robert Johnson",
      department: "Finance",
      designation: "Accountant",
      status: "Inactive",
    },
    {
      id: "EMP004",
      name: "Emily Davis",
      department: "Marketing",
      designation: "Marketing Lead",
      status: "Active",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Employee Directory</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeeList;
