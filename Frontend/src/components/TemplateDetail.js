import React, { useEffect, useState } from 'react';
import { fetchTemplates } from '../utils/api';
import CommentSection from './CommentSection';
import LikeButton from './LikeButton';

function TemplateDetail({ match }) {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetchTemplates(match.params.id).then(response => {
      setTemplate(response.data);
    });
  }, [match.params.id]);

  if (!template) return <div>Loading...</div>;

  return (
    <div>
      <h2>{template.title}</h2>
      <p>{template.description}</p>
      <LikeButton templateId={template.id} />
      <CommentSection templateId={template.id} />
    </div>
  );
}

export default TemplateDetail;