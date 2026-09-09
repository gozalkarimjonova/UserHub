import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-violet-200 dark:border-violet-800/40 bg-white/80 dark:bg-[#0c0618]/80 backdrop-blur-xl transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              UserHub
            </span>
            <span className="text-xs text-violet-500 dark:text-violet-400/60">
              — React, Zustand, React Router & Tailwind CSS
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-violet-600 dark:text-violet-400/70">
            <Link to="/" className="hover:text-violet-800 dark:hover:text-violet-300 transition-colors">
              Bosh sahifa
            </Link>
            <Link to="/users" className="hover:text-violet-800 dark:hover:text-violet-300 transition-colors">
              Foydalanuvchilar
            </Link>
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
            >
              JSONPlaceholder API
            </a>
          </div>

          <p className="text-xs text-violet-400 dark:text-violet-500/50 text-center md:text-right">
            © {currentYear} UserHub Project. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
