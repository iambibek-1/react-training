import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
    const [message, setMessage] = useState("Hello from Parent Component!!!");
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildA setMessage={setMessage}/>
        <ChildB message={message}/>
    </div>
  )
}

export default Parent