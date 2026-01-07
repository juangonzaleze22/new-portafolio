import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'es', flag: '🇪🇸' },
    { code: 'en', flag: '🇺🇸' }
  ];

  const getLanguageLabel = (code) => {
    return code === 'es' ? t('language.spanish') : t('language.english');
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="LanguageSelector" ref={dropdownRef}>
      <button
        className="LanguageSelector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        title={getLanguageLabel(currentLanguage.code)}
      >
        <span className="LanguageSelector__flag">{currentLanguage.flag}</span>
        <i className={`bx bx-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <div className="LanguageSelector__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`LanguageSelector__option ${
                i18n.language === lang.code ? 'active' : ''
              }`}
              onClick={() => changeLanguage(lang.code)}
              title={getLanguageLabel(lang.code)}
            >
              <span className="LanguageSelector__flag">{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

