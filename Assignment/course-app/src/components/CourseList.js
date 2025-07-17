import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Danh sách khóa học</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.map(course => (
          <div key={course.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <p>Giá: {course.price.toLocaleString()} VND</p>
            <Link to={`/courses/${course.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
