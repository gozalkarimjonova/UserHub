import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const cardClass =
  'p-6 rounded-2xl bg-white dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/40 shadow-lg hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-600/40 transition-all backdrop-blur-sm';

function Home() {
  const [featuredUsers, setFeaturedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setFeaturedUsers(response.data.slice(0, 3));
      } catch (err) {
        setError(err.message || 'Xatolik yuz berdi');
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="space-y-16 pb-12">
      <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 border border-violet-300 dark:bg-violet-900/40 dark:text-violet-300 dark:border-violet-700/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            Exam Zustand & React Router Loyihasi
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-violet-950 dark:text-white leading-tight">
            Foydalanuvchilar ma'lumotlarini{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent animate-shimmer">
              qulay boshqaring
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-violet-700 dark:text-violet-200/70 max-w-2xl mx-auto leading-relaxed">
            Ushbu loyiha <strong className="text-violet-600 dark:text-violet-400">useState</strong>,{' '}
            <strong className="text-violet-600 dark:text-violet-400">useEffect</strong>,{' '}
            <strong className="text-violet-600 dark:text-violet-400">useParams</strong>, hamda{' '}
            <strong className="text-violet-600 dark:text-violet-400">Zustand</strong> (localStorage) orqali boshqariladigan Dark/Light rejimiga asoslangan.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/users"
              className="px-6 py-3.5 rounded-xl text-white font-medium bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-600/25 transition-all transform hover:-translate-y-0.5"
            >
              Foydalanuvchilarni ko'rish →
            </Link>
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl font-medium bg-white hover:bg-violet-50 text-violet-800 border border-violet-300 dark:bg-violet-950/60 dark:hover:bg-violet-900/60 dark:text-violet-200 dark:border-violet-700/50 transition-all"
            >
              API Manbasi (JSON)
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={cardClass}>
            <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-xl mb-4">⚛️</div>
            <h3 className="font-semibold text-lg text-violet-950 dark:text-white">React Hooks</h3>
            <p className="mt-2 text-sm text-violet-600 dark:text-violet-300/60">useState va useEffect yordamida ma'lumotlar yuklanadi va holat boshqariladi.</p>
          </div>
          <div className={cardClass}>
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl mb-4">🐻</div>
            <h3 className="font-semibold text-lg text-violet-950 dark:text-white">Zustand & LocalStorage</h3>
            <p className="mt-2 text-sm text-violet-600 dark:text-violet-300/60">Light & Dark Mode Zustand do'konida saqlanadi va refresh qilinganda ham o'chib ketmaydi.</p>
          </div>
          <div className={cardClass}>
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-600/20 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center font-bold text-xl mb-4">🔗</div>
            <h3 className="font-semibold text-lg text-violet-950 dark:text-white">useParams Routing</h3>
            <p className="mt-2 text-sm text-violet-600 dark:text-violet-300/60">Har bir user card ustiga bosilganda ID orqali to'liq sahifaga o'tiladi.</p>
          </div>
          <div className={cardClass}>
            <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 flex items-center justify-center font-bold text-xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg text-violet-950 dark:text-white">Premium Violet Theme</h3>
            <p className="mt-2 text-sm text-violet-600 dark:text-violet-300/60">Light va Dark rejimlar — Tailwind CSS bilan premium violet dizayn.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-violet-950 dark:text-white">Tanlangan Foydalanuvchilar</h2>
            <p className="text-sm text-violet-500 dark:text-violet-400/60 mt-1">API dan olingan dastlabki namunalar</p>
          </div>
          <Link to="/users" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 hover:underline flex items-center gap-1">
            Barchasini ko'rish →
          </Link>
        </div>

        {loading ? (
          <Loading text="Foydalanuvchilar yuklanmoqda..." />
        ) : error ? (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800/50">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredUsers.map((user) => (
              <div key={user.id} className={`${cardClass} flex flex-col justify-between`}>
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet-600 to-purple-500 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-violet-600/30 mb-4">
                    {user.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg text-violet-950 dark:text-white">{user.name}</h3>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-mono">@{user.username}</p>
                  <p className="mt-2 text-sm text-violet-600 dark:text-violet-300/60">📧 {user.email}</p>
                  <p className="text-sm text-violet-600 dark:text-violet-300/60">🏢 {user.company?.name}</p>
                </div>
                <Link
                  to={`/users/${user.id}`}
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-violet-100 text-violet-700 hover:bg-violet-200 border border-violet-200 dark:bg-violet-900/50 dark:text-violet-300 dark:hover:bg-violet-800/60 dark:border-violet-700/40 transition-colors"
                >
                  To'liq ma'lumotni ko'rish →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
