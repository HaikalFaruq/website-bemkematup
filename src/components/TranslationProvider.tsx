
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define available languages
type Language = 'en' | 'id';

// Define translations
const translations = {
  en: {
    'Home': 'Home',
    'Ministry': 'Ministry',
    'Blog': 'Blog',
    'FAQ': 'FAQ',
    'Contact': 'Contact',
    // Add more translations as needed
  },
  id: {
    'Home': 'Beranda',
    'Ministry': 'Kementerian',
    'Blog': 'Blog',
    'FAQ': 'FAQ',
    'Contact': 'Kontak',
    // Add more translations as needed
  }
};

type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'id')) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key as keyof typeof translations.en]) {
      return translations[language][key as keyof typeof translations.en];
    }
    return key; // Fallback to the key itself if translation not found
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
