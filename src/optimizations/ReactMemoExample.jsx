import React, { useEffect, useState } from "react";

const User = React.memo(({ user }) => {
  console.log(`Rendering user: ${user.name}`); // This will log only when the user prop changes;
  return <div>UserName:{user.name}</div>;
});

function ReactMemoExample() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  //fetch data using API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  //filter user based on search
  const filteredUsers = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>React Memo example</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ReactMemoExample;
