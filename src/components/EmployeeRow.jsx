import React from "react";

function EmployeeRow({ employee }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.designation}</td>
      <td>{employee.status}</td>
      <td>
        <button>View</button>
      </td>
    </tr>
  );
}

export default EmployeeRow;
