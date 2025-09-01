import React, { useCallback, useState } from "react";

const UserButton = React.memo(({ onClick, name }) => {
  console.log(`Rendering button: ${name}`);
  return <button onClick={onClick}>{name}</button>;
});

function UseCallbackExample() {
  const [users] = useState(["User1", "User2", "User3"]);

  const handleClick = useCallback((name) => {
    // alert(`Hello ${name}`);
    console.log(`Button clicked: ${name}`);
  }, []);

  return (
    <div>
      <h1>Use Callback Example</h1>
      {users.map((user) => (
        <UserButton key={user} name={user} onClick={() => handleClick(user)} />
      ))}
    </div>
  );
}

export default UseCallbackExample;
