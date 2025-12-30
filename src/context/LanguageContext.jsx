import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to Hebrew
    if (typeof window !== 'undefined') {
      return localStorage.getItem('docspLang') || 'he';
    }
    return 'he';
  });

  const t = translations[language];
  const isRTL = language === 'he';

  // Update document lang when language changes (keep RTL layout for both)
  useEffect(() => {
    document.documentElement.lang = language;
    // Keep RTL direction for consistent layout in both languages
    document.documentElement.dir = 'rtl';
    localStorage.setItem('docspLang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
