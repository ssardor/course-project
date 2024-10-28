import React, { useEffect, useState } from 'react';
import { fetchTemplates } from '../utils/api';
import CommentSection from './CommentSection';
import LikeButton from './LikeButton';
import { useTranslation } from 'react-i18next';

function TemplateDetail({ match }) {
  const { t } = useTranslation();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetchTemplates(match.params.id).then(response => {
      setTemplate(response.data);
    });
  }, [match.params.id]);

  if (!template) return <div>{t('loading')}</div>;

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