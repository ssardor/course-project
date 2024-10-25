import React, { useState } from 'react';
import { createForm } from '../utils/api';

function CreateFormPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createForm({ title, description }).then(() => {
      setTitle('');
      setDescription('');
      alert('Form created successfully!');
    });
  };

  return (
    <div>
      <h2>Create a New Form</h2>
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
        <button type="submit" className="btn btn-primary">Create Form</button>
      </form>
    </div>
  );
}

export default CreateFormPage;