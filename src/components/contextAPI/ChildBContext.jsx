import React, { useContext } from "react";
import MessageContext from "./MessageContext";

function ChildBContext() {
  const { message } = useContext(MessageContext);
  return (
    <div>
      <h1>ChildB(Context)</h1>
      <p>Message:{message}</p>
    </div>
  );
}

export default ChildBContext;
