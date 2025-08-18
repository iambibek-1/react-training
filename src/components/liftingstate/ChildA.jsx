import React from 'react'

function ChildA({setMessage}) {
  return (
    <div>
        <h2>Child A</h2>
        <button onClick={()=>setMessage("Message update from Child A!!!")}> Update Message</button>
    </div>
  )
}

export default ChildA