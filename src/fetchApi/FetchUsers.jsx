import React, { useEffect, useState } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error)); //incase if some error happen during fetching data
  }, []);
  return (
    <div>
      <h1>Fetch Users</h1>
      <ul>
        {users.map((user) => (
          <li>
            My name is {user.name}, my email is {user.email} and I live in
            {user.address.street}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
