import React from "react";

function GreatGrandChild({ userName }) {
  return (
    <div>
      <h5>GreatGrandChild Component</h5>
      <p>Hello, {userName}! </p>
    </div>
  );
}

export default GreatGrandChild;
