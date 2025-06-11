
import './App.css';
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import NameList from './NameList';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './StudentCard';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
    const userData = { name: "Hoàng Anh", age: 21 };
    const namesList = ["Hoàng Anh", "Lê Ngọc", "Văn Quang", "Hoàng Huy", "Gia Khánh"];
    const students = [
    { name: "Hoàng Anh", age: 99, avatar: "/img/st1.png" },
    { name: "Ngọc Lê", age: 88, avatar: "/img/st2.png" },
    { name: "Hoàng Huy", age: 77, avatar: "/img/st3.png" },
  ];

    return (
  <>
    <Welcome name="Hoàng Anh" />
    <UserProfile user={userData} />
    <NameList names={namesList} />
    <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4  }>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>

  </>
  );
}

export default App;
