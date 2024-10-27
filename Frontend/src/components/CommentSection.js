import React, { useState, useEffect } from 'react';
import { postComment, fetchComments } from '../utils/api';

function CommentSection({ templateId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showInput, setShowInput] = useState(false); // State to manage input visibility

  useEffect(() => {
    const loadComments = async () => {
      try {
        const response = await fetchComments(templateId);
        setComments(response.data || []); // Ensure comments is always an array
      } catch (error) {
        console.error('Failed to fetch comments:', error);
        setComments([]); // Set to empty array on error
      }
    };

    loadComments();
  }, [templateId]);

  const handleCommentSubmit = () => {
    postComment({ templateId, content: newComment }).then(() => {
      setNewComment('');
      fetchComments(templateId).then(response => {
        setComments(response.data || []); // Ensure comments is always an array
      });
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {Array.isArray(comments) && comments.map(comment => (
          <li key={comment.id}>{comment.content}</li> // Use a unique identifier for the key
        ))}
      </ul>
      <button className='btn btn-warning' onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Cancel' : 'Comment'}
      </button>
      {showInput && (
        <>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button  className='btn btn-success' onClick={handleCommentSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default CommentSection;