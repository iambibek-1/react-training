import React from "react";
import useFetch from "../hooks/useFetch";

function UserList() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>My name is {user.name}, my email is {user.email}and i lives in {user.address.street}</li>


        ))}
      </ul>
    </div>
  );
}

export default UserList;
