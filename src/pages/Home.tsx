import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLanguage } from "../contexts/Language";

const PageContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1.5rem 2.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PostCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
  }
`;

const PostTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.p`
  color: ${({ theme }) => theme.text}99;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.buttonBg === '#FFFFFF' ? '#3B82F6' : '#60A5FA'};
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedSection = styled.section`
  margin: 0 1.5rem 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export default function HomePage() {
  const { currentLanguage, t } = useLanguage();
  
  // 다국어 포스트 데이터
  const posts = {
    en: [
      { id: 1, title: "Short Posts for Minimal Reading", category: "Minimalism", date: "2025-02-22" },
      { id: 2, title: "Popular Design Trends in 2025", category: "Design", date: "2025-02-20" },
      { id: 3, title: "Technology Trends to Watch", category: "Technology", date: "2025-02-18" },
    ],
    ko: [
      { id: 1, title: "짧은 글로 핵심만 전달하기", category: "미니멀리즘", date: "2025-02-22" },
      { id: 2, title: "2025년 인기 디자인 트렌드", category: "디자인", date: "2025-02-20" },
      { id: 3, title: "주목해야 할 기술 트렌드", category: "기술", date: "2025-02-18" },
    ]
  };
  
  const currentPosts = posts[currentLanguage as keyof typeof posts];
  
  return (
    <PageContainer>
      {/* 추천 게시물 섹션 */}
      <FeaturedSection>
        <SectionTitle>
          {currentLanguage === 'en' ? 'Featured Posts' : '추천 게시물'}
        </SectionTitle>
        
        <PostCard>
          <PostTitle>
            {currentLanguage === 'en' 
              ? 'Building a Multi-language Blog with React' 
              : 'React로 다국어 블로그 만들기'}
          </PostTitle>
          <PostMeta>
            {currentLanguage === 'en' ? 'Development' : '개발'} • 2025-02-24
          </PostMeta>
          <p>
            {currentLanguage === 'en' 
              ? 'Learn how to create a sleek, minimal blog with multiple language support using React, TypeScript, and styled-components.' 
              : 'React, TypeScript, styled-components를 사용하여 세련되고 미니멀한 다국어 지원 블로그를 만드는 방법을 알아보세요.'}
          </p>
          <ReadMoreLink to="/blog/featured">
            {currentLanguage === 'en' ? 'Read More →' : '더 읽기 →'}
          </ReadMoreLink>
        </PostCard>
      </FeaturedSection>

      {/* 최신 게시물 섹션 */}
      <FeaturedSection>
        <SectionTitle>
          {currentLanguage === 'en' ? 'Latest Posts' : '최신 게시물'}
        </SectionTitle>
        <MainContent>
          {currentPosts.map((post) => (
            <PostCard key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>{post.category} • {post.date}</PostMeta>
              <ReadMoreLink to={`/post/${post.id}`}>
                {currentLanguage === 'en' ? 'Read More →' : '더 읽기 →'}
              </ReadMoreLink>
            </PostCard>
          ))}
        </MainContent>
      </FeaturedSection>
    </PageContainer>
  );
}