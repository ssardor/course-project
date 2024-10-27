import React, { useEffect, useState, useMemo } from 'react';
import { fetchTemplates } from '../utils/api';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

function TemplateList({ isAuthenticated, user }) {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const response = await fetchTemplates();
        console.log(response);

        if (Array.isArray(response)) {
          setTemplates(response);
        } else if (response.data && Array.isArray(response.data)) {
          setTemplates(response.data);
        } else {
          console.error('Unexpected response format:', response);
          setTemplates([]);
        }
      } catch (error) {
        console.error('Failed to fetch templates:', error);
        setTemplates([]);
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const renderedTemplates = useMemo(() => {
    return templates.map(template => (
      <div key={template.id} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{template.title}</h5>
          <p className="card-text">{template.content}</p>
          <p className="card-text"><small className="text-muted">Created on: {template.createdAt}</small></p>
          <LikeButton templateId={template.id} user={user} />
          <CommentSection templateId={template.id} />
        </div>
      </div>
    ));
  }, [templates]);

  const renderedTemplatesAuth = useMemo(() => {
    return templates.map(template => (
      <div key={template.id} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{template.title}</h5>
          <p className="card-text">{template.content}</p>
          <p className="card-text"><small className="text-muted">Created on: {template.createdAt}</small></p>
        </div>
      </div>
    ));
  }, [templates]);

  return (
    <div className="container">
      <h2 className="my-4">Templates</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : isAuthenticated ? (
        <div className="row">
          {renderedTemplates}
        </div>
      ) : (
        <div className="row">
          {renderedTemplatesAuth}
        </div>
      )}
    </div>
  );
}

export default TemplateList;