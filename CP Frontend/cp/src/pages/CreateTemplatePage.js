import React, { useState } from 'react';
import { createTemplate } from '../utils/api';

function CreateTemplatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTemplate({ title, description });
      setTitle('');
      setDescription('');
      alert('Template created successfully!');
    } catch (error) {
      alert('Failed to create template.');
    }
  };

  return (
    <div>
      <h2>Create a New Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Template</button>
      </form>
    </div>
  );
}

export default CreateTemplatePage;