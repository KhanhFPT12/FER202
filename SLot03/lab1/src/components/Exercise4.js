import React from 'react';

const averageAge = (...ages) => {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2);
};

const Exercise4 = () => {
  const employees = [
    { age: 50 },
    { age: 40 },
    { age: 19 },
    { age: 22 },
    { age: 16 }
  ];

  const ages = employees.map(e => e.age);
  const avg = averageAge(...ages);

  return (
    <div>
      <h2>Average Age</h2>
      <p>Average: {avg}</p>
    </div>
  );
};

export default Exercise4;
