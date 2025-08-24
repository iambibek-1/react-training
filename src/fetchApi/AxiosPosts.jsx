import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosPosts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  });
  return (
    <div>
      <h1>Axios Posts</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AxiosPosts;
