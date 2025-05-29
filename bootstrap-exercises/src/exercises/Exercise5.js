import React, { useState } from 'react';

const Exercise5 = () => {
  const students = [
    {
      id: 'DE160182',
      name: 'Nguyễn Hữu Quốc Khánh',
      status: 'Absent',
      location: 'DaNang',
      image: '/images/sv1.jpg', // Đường dẫn tương đối từ thư mục public
    },
    {
      id: 'DE160377',
      name: 'Choy Vinh Thiên',
      status: 'Present',
      location: 'QuangNam',
      image: '/images/sv2.jpg',
    },
    {
      id: 'DE160547',
      name: 'Đỗ Nguyễn Phúc',
      status: 'Absent',
      location: 'QuangNam',
      image: '/images/sv3.jpg',
    },
    {
      id: 'DE170049',
      name: 'Lê Hoàng Minh',
      status: 'Present',
      location: 'DaNang',
      image: '/images/sv4.jpg',
    },
  ];

  const [studentData, setStudentData] = useState(students);

  const handleStatusChange = (index, status) => {
    const updatedData = [...studentData];
    updatedData[index].status = status;
    setStudentData(updatedData);
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#EACDAD',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #EA8A2F',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/fptlogo.jpg"
            alt="FPT Logo"
            style={{ width: '100px', height: '50px', marginRight: '10px' }}
          />
          <div>
            <h5 style={{ margin: 0, color: '#ff6200', fontWeight: 'bold' }}></h5>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: '#F46F25',
              }}
            >
              🏠TRANG CHỦ | 📚NGÀNH HỌC | 🎓TUYỂN SINH | 👨‍🎓SINH VIÊN
            </p>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '200px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
      </header>

      {/* Group Photo */}
      <div
        style={{
          backgroundColor: '#EA8A2F',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          src="/images/banner.jpg"
          alt="Group Photo"
          style={{
            width: '92%',
            maxWidth: '800%',
            height: '550px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        />
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '20px 50px', backgroundColor: '#E8ECEF', borderBottom: '1px solid #eee', width: '15%', marginLeft: '7%' }}>
        <a href="/" style={{ color: '#ff6200', textDecoration: 'none', fontSize: '14px' }}>Home</a>
        <span style={{ color: '#999', margin: '0 10px' }}>/</span>
        <span style={{ color: '#333', fontSize: '14px' }}>Students</span>
      </div>

      {/* Students Detail Section */}
      <div style={{ padding: '25px 20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Students Detail Title */}
        <h2
          style={{
            textAlign: 'center',
            color: '#333',
            fontWeight: 'bold',
            marginBottom: '30px',
            fontSize: '24px',
          }}
        >
          Students Detail
        </h2>

        {/* Students Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', width: '150%', marginLeft: '-20%' }}>
          {studentData.map((student, index) => (
            <div
              key={student.id}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={student.image}
                alt={student.name}
                style={{
                  width: '90%',
                  height: '400px',
                  objectFit: 'cover',
                  border: '1px solid #ddd',
                  borderRadius: '3px',
                  marginBottom: '10px',
                }}
              />
              <h5 style={{ color: '#ff6200', fontWeight: 'bold', margin: '5px 0' }}>{student.id}</h5>
              <p style={{ color: '#333', margin: '5px 0', fontWeight: '500' }}>{student.name}</p>
              <p style={{ color: '#666', margin: '5px 0' }}>{student.location}</p>
              <div style={{ margin: '10px 0' }}>
                <label style={{ marginRight: '15px', color: '#333', fontSize: '14px' }}>
                  <input
                    type="radio"
                    name={`status-${student.id}`}
                    value="Absent"
                    checked={student.status === 'Absent'}
                    onChange={() => handleStatusChange(index, 'Absent')}
                    style={{ marginRight: '5px' }}
                  />
                  Absent
                </label>
                <label style={{ color: '#333', fontSize: '14px' }}>
                  <input
                    type="radio"
                    name={`status-${student.id}`}
                    value="Present"
                    checked={student.status === 'Present'}
                    onChange={() => handleStatusChange(index, 'Present')}
                    style={{ marginRight: '5px' }}
                  />
                  Present
                </label>
              </div>
              <button
                style={{
                  backgroundColor: '#E87A3D',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                SUBMIT
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#E87A3D',
          color: '#333',
          padding: '20px',
          textAlign: 'center',
          marginTop: '30px',
        }}
      >
        <h2 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px' }}>ADDRESS</h2>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>Km8, Đồi Th1, Ngõ Ning</p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Phone: <a href="tel:094-8021711" style={{ color: '#333', textDecoration: 'underline' }}>094-8021711</a>
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Email:{' '}
          <a href="mailto:info@fpt.com" style={{ color: '#333', textDecoration: 'underline' }}>
            info@fpt.com
          </a>
        </p>
        <div style={{ margin: '15px 0' }}>
          <a href="#" style={{ color: '#333', margin: '0 10px' }}>
            <i className="bi bi-google"></i>
          </a>
          <a href="#" style={{ color: '#333', margin: '0 10px' }}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" style={{ color: '#333', margin: '0 10px' }}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" style={{ color: '#333', margin: '0 10px' }}>
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#" style={{ color: '#333', margin: '0 10px' }}>
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p style={{ margin: 0, fontSize: '12px' }}>© Copyright 2023</p>
      </footer>
    </div>
  );
};

export default Exercise5;