import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Aside from "./Aside";

interface MainLayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-top: 4rem;
  
  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <LayoutContainer>
      <Aside />
      <MainContent>
        <Header />
        <Main>{children}</Main>
      </MainContent>
    </LayoutContainer>
  );
}