import React from "react";

function EmployeeRow({ employee }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.designation}</td>
      <td>
        <span
          className={
            employee.status === "Active" ? "status active" : "status inactive"
          }
        >
          {employee.status}
        </span>
      </td>
      <td>
        <button className="view-btn">View</button>
      </td>
    </tr>
  );
}

export default EmployeeRow;
