import React from 'react';
import FormDetail from '../components/FormDetail';

function FormPage({ match }) {
  return (
    <div>
      <FormDetail match={match} />
    </div>
  );
}

export default FormPage;