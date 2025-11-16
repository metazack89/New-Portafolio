import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();
  const current = i18n.language || 'es';

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng); // persistir
  };

  return (
    <div className={className || 'flex items-center gap-2'}>
      <button
        onClick={() => changeLang('en')}
        aria-label="English"
        style={{ opacity: current === 'en' ? 1 : 0.6 }}
      >
        <img src="/assets/language/uk.png" alt="EN" style={{ width: 28, height: 18 }} />
      </button>

      <button
        onClick={() => changeLang('es')}
        aria-label="Español"
        style={{ opacity: current === 'es' ? 1 : 0.6 }}
      >
        <img src="/assets/language/spain.png" alt="ES" style={{ width: 28, height: 18 }} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
