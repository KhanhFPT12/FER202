import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailPasswordForm from "./components/EmailPasswordForm";
import MultiFieldForm from "./components/MultiFieldForm";
function App() {
  return (
    <div className="container">
      <h2>Exercise 4</h2>
      <ValidatedInput />
      <h2>Exercise 5</h2>
      <EmailPasswordForm />
      <h2>Exercise 6</h2>
      <MultiFieldForm />
    </div>
  );
}

export default App;
