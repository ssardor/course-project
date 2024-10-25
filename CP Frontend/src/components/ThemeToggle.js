import React from 'react';

function ThemeToggle({ toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;