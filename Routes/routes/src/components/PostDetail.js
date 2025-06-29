import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === id);
        setPost(found);
      })
      .catch(err => console.error('Error loading post detail:', err));
  }, [id]);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
