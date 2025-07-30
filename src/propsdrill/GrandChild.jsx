import React from "react";
import GreatGrandChild from "./GreatGrandChild";

function GrandChild({ userName }) {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <GreatGrandChild userName={userName} />
    </div>
  );
}

export default GrandChild;
