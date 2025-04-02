import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../../contexts/Theme';
import { useLanguage } from '../../contexts/Language';
import * as S from '../../styles/Header';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const handleLanguageChange = () => {
    changeLanguage(currentLanguage === 'en' ? 'ko' : 'en');
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderWrapper>
          <S.LogoAndNav>
            <S.Logo to="/">
              {t('blog_platform')}
            </S.Logo>
            <S.Nav>
              <S.NavLink to="/">
                {t('home')}
              </S.NavLink>
              <S.NavLink to="/blog">
                {t('blog')}
              </S.NavLink>
              <S.NavLink to="/search">
                {t('search')}
              </S.NavLink>
            </S.Nav>
          </S.LogoAndNav>

          <S.RightTools>
            <S.IconButton onClick={handleLanguageChange}>
              <Languages size={20} />
              <S.LanguageText>{currentLanguage.toUpperCase()}</S.LanguageText>
            </S.IconButton>

            <S.IconButton 
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} color='#fff' />
              ) : (
                <Moon size={20} />
              )}
            </S.IconButton>
          </S.RightTools>
        </S.HeaderWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}