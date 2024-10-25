import React, { useState } from 'react';
import { searchTemplates } from '../utils/api';

function SearchFormsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    searchTemplates(query).then(response => {
      setResults(response.data);
    });
  };

  return (
    <div>
      <h2>Search Forms</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul className="list-group">
        {results.map(form => (
          <li key={form.id} className="list-group-item">
            {form.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFormsPage;