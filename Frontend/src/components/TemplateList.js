import React, { useEffect, useState, useMemo } from 'react';
import { fetchTemplates } from '../utils/api';

function TemplateList() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates().then(response => {
      setTemplates(response.data);
    });
  }, []);

  // Используем useMemo для мемоизации списка шаблонов
  const renderedTemplates = useMemo(() => {
    return templates.map(template => (
      <li key={template.id} className="list-group-item">
        {template.title}
      </li>
    ));
  }, [templates]);

  return (
    <div>
      <h2>Templates</h2>
      <ul className="list-group">
        {renderedTemplates}
      </ul>
    </div>
  );
}

export default TemplateList;