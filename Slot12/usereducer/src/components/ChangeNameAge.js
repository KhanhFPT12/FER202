import React, { useReducer } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
              placeholder="Enter your name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Age:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={state.age}
              onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
              placeholder="Enter your age"
            />
          </Col>
        </Form.Group>
      </Form>

      <h5 className="mt-4">Name: {state.name}</h5>
      <h5>Age: {state.age}</h5>
    </Container>
  );
}

export default ChangeNameAge;
