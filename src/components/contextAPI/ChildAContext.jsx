import React, { useContext } from "react";
import MessageContext from "./MessageContext";

function ChildAContext() {
  const { setMessage } = useContext(MessageContext);

  return (
    <div>
      <h2>Child A(context)</h2>
      <button
        onClick={() => setMessage("Message update from Child A (Context)")}
      >
        Update Message
      </button>
    </div>
  );
}

export default ChildAContext;
