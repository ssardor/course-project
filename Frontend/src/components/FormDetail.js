import React, { useEffect, useState } from 'react';
import { fetchForms } from '../utils/api';

function FormDetail({ match }) {
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetchForms(match.params.id);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, [match.params.id]);

  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{form.title}</h2>
      <p>{form.description}</p>
      {/* Add more form details here */}
    </div>
  );
}

export default FormDetail;