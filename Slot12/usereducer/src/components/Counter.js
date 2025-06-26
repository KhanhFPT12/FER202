import React, { useReducer } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="text-center mt-5">
      <h2>Counter: {state.count}</h2>
      <div className="d-flex justify-content-center gap-2 my-3">
        <Button variant="primary" onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
        <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
        <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
      </div>
    </Container>
  );
}

export default Counter;
