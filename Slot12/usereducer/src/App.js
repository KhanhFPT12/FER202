
import ChangeNameAge from "./components/ChangeNameAge";
import Counter from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./components/ItemList";
import EnhancedItemList from "./components/EnhancedItemList";
import QuestionBank from "./components/QuestionBank";


function App() {
  return (
    <div>
      <h2>Exercise1 :</h2>
      <Counter />
      <h2>Exercise2 :</h2>
      <ChangeNameAge />
      <h2>Exercise3 :</h2>
      <ItemList />
      <h2>Exercise4 :</h2>
      <EnhancedItemList />
      <h2>Exercise5 :</h2>
      <QuestionBank />
    </div>
  );
}

export default App;
