import React, { useState } from "react";
import MessageContext from "./MessageContext";
import ChildAContext from "./ChildAContext";
import ChildBContext from "./ChildBContext";

function ParentWithContext() {
    const [message, setMessage] = useState("Hello from Context Parent Component");
  return (
    <MessageContext.Provider value={{message,setMessage}}>
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Parent Component</h1>
        <ChildAContext/>
        <ChildBContext/>
      </div>
    </MessageContext.Provider>
  );
}

export default ParentWithContext;
