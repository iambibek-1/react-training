import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function PostDetails() {
    const navigate = useNavigate();
    const handleOkClick = () => {
        navigate("/dashboard"); 
      };

    const {postId} = useParams();
  return (
    <div>
        <h1>Showing Post Details of Post Id:{postId}</h1>
        <button onClick={handleOkClick}>OK</button>
    </div>
  )
}

export default PostDetails
