import { useLanguage } from '../../contexts/Language';
import * as S from '../../styles/Aside';

export default function Aside() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <S.AsideContainer>
      <S.NavSection>
        <S.SectionTitle>{t('menu')}</S.SectionTitle>
        
        <S.MenuLinks>
          <S.MenuItem to="/">{t('home')}</S.MenuItem>
          <S.MenuItem to="/post">{t('post')}</S.MenuItem>
          <S.MenuItem to="/search">{t('search')}</S.MenuItem>
        </S.MenuLinks>
      </S.NavSection>

      <S.NavSection>
        <S.SectionTitle>{t('post_types')}</S.SectionTitle>
        <S.MenuLinks>
          <S.MenuItem to="/short-posts">{t('short_posts')}</S.MenuItem>
          <S.MenuItem to="/popular-posts">{t('popular_posts')}</S.MenuItem>
        </S.MenuLinks>
      </S.NavSection>

      <S.LanguageSwitcher>
        <S.SectionTitle>{t('language')}</S.SectionTitle>
        <S.LanguageButtons>
          <S.LanguageButton 
            $active={currentLanguage === 'en'}
            onClick={() => changeLanguage('en')}
          >
            EN
          </S.LanguageButton>
          <S.LanguageButton 
            $active={currentLanguage === 'ko'}
            onClick={() => changeLanguage('ko')}
          >
            KO
          </S.LanguageButton>
        </S.LanguageButtons>
      </S.LanguageSwitcher>
    </S.AsideContainer>
  );
}