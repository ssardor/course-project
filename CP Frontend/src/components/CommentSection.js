import React, { useState, useEffect } from 'react';
import { postComment, fetchComments } from '../utils/api'; // Предположим, что у вас есть API для получения комментариев

function CommentSection({ templateId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments(templateId).then(response => {
      setComments(response.data);
    });
  }, [templateId]);

  const handleCommentSubmit = () => {
    postComment({ templateId, text: newComment }).then(() => {
      setNewComment('');
      fetchComments(templateId).then(response => {
        setComments(response.data);
      });
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
}

export default CommentSection;