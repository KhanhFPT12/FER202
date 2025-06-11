import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
        
        <Button variant="primary">Edit</Button>
        <Button variant="primary" className="ms-2">xem chi tiết</Button>
        
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
