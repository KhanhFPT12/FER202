
const Exercise7 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    if (a.department === b.department) {
      return a.name.localeCompare(b.name);
    }
    return a.department.localeCompare(b.department);
  });

  return (
    <div>
      <h2>Sorted Employees</h2>
      <ul>
        {sortedEmployees.map((emp, index) => (
          <li key={index}>{emp.department} - {emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise7;
