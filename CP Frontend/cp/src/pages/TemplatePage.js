import React from 'react';
import TemplateDetail from '../components/TemplateDetail';

function TemplatePage({ match }) {
  return (
    <div>
      <TemplateDetail match={match} />
    </div>
  );
}

export default TemplatePage;