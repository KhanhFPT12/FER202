
const Exercise5 = () => {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];

  return (
    <div>
      <h2>Select an Employee</h2>
      <select>
        {employees.map((emp, index) => (
          <option key={index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Exercise5;
