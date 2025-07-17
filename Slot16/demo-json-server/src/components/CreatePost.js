import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/posts", { title, content });
      setStatus("Tạo bài viết thành công!");
      navigate("/posts"); // Quay lại danh sách
    } catch (err) {
      setStatus("Lỗi khi tạo bài viết.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Thêm bài viết mới</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control my-2"
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="btn btn-primary">Tạo</button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
};

export default CreatePost;
