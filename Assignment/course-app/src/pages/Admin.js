import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from '../components/CourseForm';

function Admin() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios.get('http://localhost:3001/courses')
      .then(res => setCourses(res.data));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = id => {
    axios.delete(`http://localhost:3001/courses/${id}`)
      .then(fetchCourses);
  };

  return (
    <div>
      <h2>Quản lý khóa học</h2>
      <CourseForm refreshData={fetchCourses} />
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            {c.title} - {c.price} VND
            <button onClick={() => handleDelete(c.id)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
