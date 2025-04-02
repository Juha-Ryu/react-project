import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/Theme';
import { LanguageProvider } from './contexts/Language';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
// import BlogPage from './pages/BlogPage';
// import SearchPage from './pages/SearchPage';
// import ShortPostsPage from './pages/ShortPostsPage';
// import PopularPostsPage from './pages/PopularPostsPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/blog" element={<BlogPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/short-posts" element={<ShortPostsPage />} />
              <Route path="/popular-posts" element={<PopularPostsPage />} /> */}
            </Routes>
          </MainLayout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;