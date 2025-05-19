import React, { useState } from 'react';

const Exercise10 = () => {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];

  const [query, setQuery] = useState("");

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
