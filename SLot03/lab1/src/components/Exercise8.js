
const Exercise8 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const grouped = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp.name);
    return acc;
  }, {});

  return (
    <div>
      <h2>Employees by Department</h2>
      {Object.entries(grouped).map(([dept, names]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;
