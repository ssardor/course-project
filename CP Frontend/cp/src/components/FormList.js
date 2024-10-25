import React, { useEffect, useState, useMemo } from 'react';
import { fetchForms } from '../utils/api';

function FormList() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms().then(response => {
      setForms(response.data);
    });
  }, []);

  // Используем useMemo для мемоизации списка форм
  const renderedForms = useMemo(() => {
    return forms.map(form => (
      <li key={form.id} className="list-group-item">
        {form.title}
      </li>
    ));
  }, [forms]);

  return (
    <div>
      <h2>Forms</h2>
      <ul className="list-group">
        {renderedForms}
      </ul>
    </div>
  );
}

export default FormList;