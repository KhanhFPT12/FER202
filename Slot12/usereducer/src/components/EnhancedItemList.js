import React, { useReducer, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  ListGroup,
} from "react-bootstrap";

const initialState = {
  items: [],
  sortBy: "time",
  filter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { ...action.item, editing: false }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, editing: true } : item
        ),
      };
    case "CANCEL_EDIT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, editing: false } : item
        ),
      };
    case "SAVE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name, editing: false } : item
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.value,
      };
    case "SET_SORT":
      const sorted = [...state.items];
      if (action.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted.sort((a, b) => a.id - b.id);
      }
      return {
        ...state,
        items: sorted,
        sortBy: action.value,
      };
    default:
      return state;
  }
}

function EnhancedItemList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editingValue, setEditingValue] = useState("");

  const handleAdd = () => {
    if (newItemName.trim()) {
      dispatch({
        type: "ADD_ITEM",
        item: { id: Date.now(), name: newItemName },
      });
      setNewItemName("");
    }
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h4 className="mb-3">Enter Item:</h4>
          <InputGroup className="mb-2">
            <Form.Control
              type="text"
              placeholder="Enter item name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <Button onClick={handleAdd}>Add Item</Button>
          </InputGroup>

          <InputGroup className="mb-2">
            <Form.Control
              placeholder="Filter items"
              onChange={(e) => dispatch({ type: "SET_FILTER", value: e.target.value })}
            />
            <DropdownButton
              variant="outline-secondary"
              title={
                state.sortBy === "name" ? "Sort by Name" : "Sort by Created Time"
              }
              id="dropdown-sort"
            >
              <Dropdown.Item onClick={() => dispatch({ type: "SET_SORT", value: "name" })}>
                Sort by Name
              </Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch({ type: "SET_SORT", value: "time" })}>
                Sort by Created Time
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <ListGroup className="mt-3">
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                {item.editing ? (
                  <>
                    <Form.Control
                      defaultValue={item.name}
                      autoFocus
                      onChange={(e) => setEditingValue(e.target.value)}
                    />
                    <div className="d-flex gap-2 ms-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() =>
                          dispatch({ type: "SAVE_ITEM", id: item.id, name: editingValue })
                        }
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => dispatch({ type: "CANCEL_EDIT", id: item.id })}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => {
                          setEditingValue(item.name);
                          dispatch({ type: "EDIT_ITEM", id: item.id });
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default EnhancedItemList;
