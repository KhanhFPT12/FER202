function PeopleTable() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Designer" }
  ];

  return (
    <div>
      <h2>People Table</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
