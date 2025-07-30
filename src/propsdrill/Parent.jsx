import React from "react";
import Child from "./Child";

function Parent() {
  const userName = "{This is the props caming from the parent component}";

  return (
    <div>
      <h2>Parent Component</h2>
      <Child userName={userName} />
    </div>
  );
}

export default Parent;
