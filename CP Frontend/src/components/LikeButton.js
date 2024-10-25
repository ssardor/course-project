import React, { useState } from 'react';
import { likeTemplate, unlikeTemplate } from '../utils/api';

function LikeButton({ templateId }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      unlikeTemplate(templateId).then(() => setLiked(false));
    } else {
      likeTemplate(templateId).then(() => setLiked(true));
    }
  };

  return (
    <button onClick={handleLike}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
}

export default LikeButton;