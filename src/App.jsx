import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import User from './pages/User';
import UserSingle from './pages/UserSingle';
import NotFound from './pages/NotFound';
import { useThemeStore, applyTheme } from './store/themeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-violet-50 dark:bg-[#0c0618] text-violet-900 dark:text-violet-100 transition-colors duration-300">
        <Loading text="Loyiha yuklanmoqda... iltimos kuting" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-violet-50 text-violet-900 dark:bg-[#0c0618] dark:text-violet-100 transition-colors duration-300 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/users/:id" element={<UserSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
