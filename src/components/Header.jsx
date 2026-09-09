import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? 'px-3 py-2 rounded-lg text-sm font-semibold bg-violet-100 text-violet-700 border border-violet-300 dark:bg-violet-600/20 dark:text-violet-300 dark:border-violet-500/30'
      : 'px-3 py-2 rounded-lg text-sm font-medium text-violet-600 hover:text-violet-800 hover:bg-violet-100 dark:text-violet-200/70 dark:hover:text-violet-300 dark:hover:bg-violet-900/40 transition-colors';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0c0618]/80 border-b border-violet-200 dark:border-violet-800/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                UserHub
              </span>
              <span className="ml-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-900/60 dark:text-violet-300 dark:border-violet-700/50">
                Zustand
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={activeLinkClass} end>
              Bosh sahifa
            </NavLink>
            <NavLink to="/users" className={activeLinkClass}>
              Foydalanuvchilar
            </NavLink>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle Theme"
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer
                bg-violet-100 hover:bg-violet-200 text-violet-800 border-violet-300
                dark:bg-violet-900/40 dark:hover:bg-violet-800/50 dark:text-violet-200 dark:border-violet-700/50"
              title={`Hozirgi holat: ${theme === 'dark' ? 'Dark Mode' : 'Light Mode'}`}
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-300 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span>Light Mode</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-violet-600 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-violet-200 dark:border-violet-800/40 space-y-1">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={activeLinkClass} end>
              Bosh sahifa
            </NavLink>
            <NavLink to="/users" onClick={() => setMobileMenuOpen(false)} className={activeLinkClass}>
              Foydalanuvchilar
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
