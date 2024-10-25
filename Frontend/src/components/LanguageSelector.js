import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('uz')}>UZ</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
}

export default LanguageSelector;