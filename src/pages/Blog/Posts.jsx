import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  const posts = [
    { id: 1, title: "This is Post 1" },
    { id: 2, title: "This is Post 2" },
    { id: 3, title: "This is Post 3" },
    { id: 4, title: "This is Post 4" },
    { id: 5, title: "This is Post 5" },
    { id: 6, title: "This is Post 6" },
  ];
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to ={`${post.id}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
