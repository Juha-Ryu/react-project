import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AsideContainer = styled.aside`
  width: 16rem;
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  padding: 6rem 2rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.border};
  
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const NavSection = styled.nav`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
  }
`;

export const LanguageSwitcher = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
`;

export const LanguageButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export interface LanguageButtonProps {
  $active: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ $active, theme }) => 
    $active ? theme.buttonBg : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.buttonText : theme.text};
  border: ${({ $active, theme }) => 
    $active ? 'none' : `1px solid ${theme.border}`};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ $active, theme }) => 
      $active ? theme.buttonBg : theme.hoverBg};
  }
`;