import React, { useState } from 'react';
import { searchTemplates } from '../utils/api';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchTemplates(query);
      setResults(response);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search templates"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(template => (
          <li key={template.id}>{template.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;