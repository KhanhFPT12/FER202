import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ⬅ import Link để điều hướng

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
  }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div className="container mt-4">
      <h1>Danh sách bài viết</h1>

      {/* ✅ Nút Tạo bài viết mới */}
      <div className="mb-3">
        <Link to="/create" className="btn btn-success">
          Tạo bài viết mới
        </Link>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
