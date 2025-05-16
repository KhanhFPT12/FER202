import people from "./data";

function AverageAgeByOccupation() {
  const groups = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person.age);
    return acc;
  }, {});

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.keys(groups).map((occupation, index) => {
          const ages = groups[occupation];
          const average = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
          return (
            <li key={index}>
              {occupation}: {average} years
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
