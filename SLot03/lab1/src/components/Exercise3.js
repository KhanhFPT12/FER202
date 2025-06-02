
const Exercise3 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { id: 3, name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  return (
    <div>
      <h2>Employee Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td>{emp.id || index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise3;
