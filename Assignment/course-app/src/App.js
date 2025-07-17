import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import Admin from './pages/Admin';
import CourseList from './components/CourseList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<CourseList />} />
   
        <Route path="/admin" element={<Admin />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
