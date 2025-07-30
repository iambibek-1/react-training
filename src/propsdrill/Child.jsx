import React from "react";
import GrandChild from "./GrandChild";

function Child({ userName }) {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild userName={userName} />
    </div>
  );
}

export default Child;
