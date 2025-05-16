import people from "./data";

function SortedPeople() {
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>People Sorted by Occupation then Age</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - {person.occupation} - Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;
