import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.error("Lỗi khi lấy bài viết:", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/posts/${id}`, { title, content });
      navigate("/posts");
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Chỉnh sửa bài viết</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditPost;
