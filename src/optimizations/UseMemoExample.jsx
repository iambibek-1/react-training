import React, { useMemo, useState } from "react";

const users = Array.from({ length: 1000 }, (_, i) => `User name:${i + 1}`);

function UseMemoExample() {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => user.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div>
      <h1>Use memo Example</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      <p>Total Result : {filteredUsers.length}</p>

      <ul>
        {filteredUsers.slice(0, 10).map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoExample;
