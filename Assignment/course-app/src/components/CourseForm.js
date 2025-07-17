import { useState } from 'react';
import axios from 'axios';

function CourseForm({ refreshData }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/courses', form)
      .then(() => {
        refreshData();
        setForm({ title: '', description: '', price: '', image: '' });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Tên khóa học" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Mô tả" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Giá" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Hình ảnh" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
      <button>Thêm khóa học</button>
    </form>
  );
}

export default CourseForm;
