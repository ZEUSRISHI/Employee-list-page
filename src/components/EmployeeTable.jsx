import React from "react";

const EmployeeTable = ({ employees }) => {
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
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>
                <span
                  className={
                    emp.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {emp.status}
                </span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
