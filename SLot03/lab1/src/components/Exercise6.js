import React from 'react';

const Exercise6 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const itEmployees = employees.filter(e => e.department === "IT");

  return (
    <div>
      <h2>IT Employees</h2>
      <ul>
        {itEmployees.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise6;
