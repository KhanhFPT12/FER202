import React from 'react';

const Exercise9 = () => {
  const employees = [
    { name: "Anna", age: 50 },
    { name: "Brian", age: 40 },
    { name: "Clara", age: 19 },
    { name: "Ann", age: 22 },
    { name: "Elisabeth", age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Teenager Check</h2>
      <p>Is there any teenager? {isTeenager ? "Yes" : "No"}</p>
    </div>
  );
};

export default Exercise9;
