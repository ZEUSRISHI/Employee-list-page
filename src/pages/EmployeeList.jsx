import React from "react";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";

function EmployeeList() {
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
      department: "HR",
      designation: "HR Manager",
      status: "Inactive",
    },
    {
      id: "EMP003",
      name: "David Lee",
      department: "Finance",
      designation: "Accountant",
      status: "Active",
    },
  ];

  return (
    <div className="container">
      <Header />
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default EmployeeList;
