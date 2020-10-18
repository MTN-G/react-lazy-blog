import React from 'react';
import './App.css';


function Comments ({data}) {

  return (
    
    <div className="allcomments">
      <h4>Comments:</h4>
        {data.map(comment => 
        <div className='comment'>
          <h3>{comment.title}</h3>
          <h5>{comment.content}</h5>
          <h6 style={{opacity: '0.5'}}> by: {comment.name}</h6>
        </div>
      )}
    </div>
  );
}

export default Comments;