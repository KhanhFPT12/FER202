import people from "./data";

function FirstTeenager() {
  const teenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <p>
          {teenager.name} - Age: {teenager.age}
        </p>
      ) : (
        <p>No teenager found</p>
      )}
    </div>
  );
}

export default FirstTeenager;
