function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Designer" }
  ];

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - Age: {person.age} - Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
