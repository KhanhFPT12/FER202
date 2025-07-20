import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // chinh sua 
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    image: ''
  });
  const navigate = useNavigate();

  // Khi bấm Edit thì load dữ liệu vào form
  useEffect(() => {
    if (editing && laptop) {
      setFormData({
        brand: laptop.brand,
        model: laptop.model,
        year: laptop.year,
        price: laptop.price,
        image: laptop.image
      });
    }
  }, [editing, laptop]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSave = () => {
    fetch(`http://localhost:3001/Laptops/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to update');
        return res.json();
      })
      .then(data => {
        setLaptop(data);
        setEditing(false);
        navigate('/');
      })
      .catch(err => alert('Error updating laptop'));
  };

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


  // remove
  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this laptop?')) return;

    fetch(`http://localhost:3001/Laptops/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete');
        navigate('/');
      })
      .catch(() => alert('Error deleting laptop'));
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={laptop.image} height={300} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>Year: {laptop.year}</Card.Text>
          <Card.Text>Price: {laptop.price}</Card.Text>
          <Card.Text>Description: High-performance laptop for professionals.</Card.Text>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


// return (
//   <Container className="mt-4">
//     <Card>
//       <Card.Img variant="top" src={editing ? formData.image : laptop.image} height={300} />
//       <Card.Body>
//         {editing ? (
//           <>
//             <div className="mb-3">
//               <label>Brand</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Model</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="model"
//                 value={formData.model}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Year</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Price</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Image URL</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//               />
//             </div>
//             <Button variant="success" className="me-2" onClick={handleSave}>Save</Button>
//             <Button variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
//           </>
//         ) : (
//           <>
//             <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
//             <Card.Text>Year: {laptop.year}</Card.Text>
//             <Card.Text>Price: {laptop.price}</Card.Text>
//             <Card.Text>Description: High-performance laptop for professionals.</Card.Text>
//             <Button variant="warning" className="me-2" onClick={() => setEditing(true)}>Edit</Button>
//             <Button variant="danger" onClick={() => alert('You can implement delete here.')}>Delete</Button>
//           </>
//         )}
//       </Card.Body>
//     </Card>
//   </Container>
// );


export default LaptopDetail;
