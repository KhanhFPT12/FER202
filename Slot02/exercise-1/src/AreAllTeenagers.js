import people from "./data";
function AreAllTeenagers() {
  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers" : "No, not all are teenagers"}</p>
    </div>
  );
}

export default AreAllTeenagers;