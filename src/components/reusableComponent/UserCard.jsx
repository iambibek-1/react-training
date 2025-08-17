import React from 'react'
import './card.css'

function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
        <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default UserCard
