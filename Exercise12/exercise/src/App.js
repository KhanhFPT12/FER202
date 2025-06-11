import React from 'react';

import './App.css'; // Import file CSS để thêm style cơ bản
import Counter from './components/Counter';
import DragAndDropList from './components/DragAndDropList';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import SearchFilter from './components/SearchFilter';
import ColorSwitcher from './components/ColorSwitcher';

function App() {
  return (
    <div className="App">
      <h1>React useState Exercises</h1>

      <section>
        <h2>Exercise 1: Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Exercise 2: Controlled Input</h2>
        <ControlledInput />
      </section>

      <section>
        <h2>Exercise 3: Toggle Visibility</h2>
        <ToggleVisibility />
      </section>

      <section>
        <h2>Exercise 4: Todo List</h2>
        <TodoList />
      </section>

      <section>
        <h2>Exercise 5: Color Switcher</h2>
        <ColorSwitcher />
      </section>

      <section>
        <h2>Exercise 6: Search Filter</h2>
        <SearchFilter />
      </section>

      <section>
        <h2>Exercise 7: Drag and Drop List</h2>
        <DragAndDropList/>
      </section>
    </div>
  );
}

export default App;