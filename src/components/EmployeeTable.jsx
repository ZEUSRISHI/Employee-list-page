import React from "react";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees }) {
  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <EmployeeRow key={emp.id} employee={emp} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
