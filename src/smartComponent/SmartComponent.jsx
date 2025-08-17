import React, { useState } from "react";
import Message from "../dumbComponent/DumbComponent";

function SmartComponent() {
  const [text, setText] = useState("Hello from Smart Component!");

  const changeMessage = () => {
    setText("The message has been updated!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Message message={text} onChange={changeMessage} />
    </div>
  );
}

export default SmartComponent;
