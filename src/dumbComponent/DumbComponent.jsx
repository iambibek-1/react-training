import React from "react";

function Message({ message, onChange }) {
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={onChange}>Change Message</button>
    </div>
  );
}

export default Message;
