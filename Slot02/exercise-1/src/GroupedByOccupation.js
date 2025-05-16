import people from "./data";
function GroupedByOccupation() {
  const groups = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.keys(groups).map((occupation, index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {groups[occupation].map((person, i) => (
              <li key={i}>{person.name} - Age: {person.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedByOccupation;