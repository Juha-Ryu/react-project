import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => `${theme.body}CC`};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #01dce3;
`;

export const Nav = styled.nav`
  display: none;
  gap: 1rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  &:hover {
    opacity: 0.7;
  }
  transition: opacity 0.2s;
`;

export const RightTools = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover {
    opacity: 0.7;
  }
  transition: opacity 0.2s;
`;

export const LanguageText = styled.span`
  display: none;
  
  @media (min-width: 640px) {
    display: inline;
  }
`;