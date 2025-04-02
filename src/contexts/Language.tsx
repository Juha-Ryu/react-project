import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ko';

type LanguageContextType = {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// 다국어 번역 데이터
const translations = {
  en: {
    'home': 'Home',
    'blog': 'post',
    'search': 'Search',
    'popular_posts': 'Popular Posts',
    'short_posts': 'Short Posts',
    'menu': 'Menu',
    'post_types': 'Post Types',
    'blog_platform': 'B'
  },
  ko: {
    'home': '홈',
    'blog': 'post',
    'search': '검색',
    'popular_posts': '인기 게시물',
    'short_posts': '짧은 게시물',
    'menu': '메뉴',
    'post_types': '게시물 유형',
    'blog_platform': 'B'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'ko') ? savedLanguage : 'en';
  });

  // 언어 변경 함수
  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // 번역 함수
  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['en']] || key;
  };

  // HTML lang 속성 업데이트
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}