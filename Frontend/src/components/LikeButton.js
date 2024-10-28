import React, { useState, useEffect } from 'react';
import { likeTemplate, unlikeTemplate, getLikesCount } from '../utils/api';

function LikeButton({ templateId }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    const fetchLikesCount = async () => {
      const response = await getLikesCount(templateId);
      setLikesCount(response.count);
    };

    fetchLikesCount();
  }, [templateId]);

  const handleLike = () => {
    if (liked) {
      unlikeTemplate(templateId).then(() => {
        setLiked(false);
        setLikesCount(likesCount - 1);
      });
    } else {
      likeTemplate(templateId).then(() => {
        setLiked(true);
        setLikesCount(likesCount + 1);
      });
    }
  };

  return (
    <div>
      <button className='btn btn-danger' onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <span>{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}</span>
    </div>
  );
}

export default LikeButton;