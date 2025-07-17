import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card , Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);
 const navigate = useNavigate();
//  const [editing, setEditing] = useState(false); // Trạng thái sửa
//   const [formData, setFormData] = useState({}); // Dữ liệu form chỉnh sửa

  //   const handleDelete = () => {
  //   if (window.confirm('Are you sure you want to delete this laptop?')) {
  //     fetch(`http://localhost:3001/Laptops/${id}`, {
  //       method: 'DELETE',
  //     })
  //       .then(() => navigate('/laptops'))
  //       .catch(err => console.error('Delete error:', err));
  //   }
  // };


  //   const handleUpdate = () => {
  //   fetch(`http://localhost:3001/Laptops/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setLaptop(data);
  //       setEditing(false); // Tắt chế độ chỉnh sửa
  //     })
  //     .catch(err => console.error('Update error:', err));
  // };


  useEffect(() => {
    fetch(`http://localhost:3001/Laptops/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Laptop not found');
        return res.json();
      })
      .then(data => setLaptop(data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <h3>404 - Laptop Not Found</h3>;

  if (!laptop) return <h3>Loading...</h3>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={laptop.image} height={300} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>Year: {laptop.year}</Card.Text>
          <Card.Text>Price: {laptop.price}</Card.Text>
          <Card.Text>Description: High-performance laptop for professionals.</Card.Text>
           {/* <Button variant="warning" className="me-2" onClick={() => setEditing(true)}>Edit</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetail;
