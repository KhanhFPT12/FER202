import React from "react";
import ValidatedForm from "./components/ValidatedForm";

function App() {
  const handleFormSubmit = (data) => {
    console.log("Form đã gửi:", data);
    alert("Form hợp lệ! Xem console.log để kiểm tra dữ liệu.");
  };

  return (
    <div className="App">
      <h1>Ứng dụng kiểm tra dữ liệu</h1>
      <ValidatedForm title="Đăng ký người dùng" onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
