import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function User() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (err) {
        setError(err.message || "Foydalanuvchilarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const lower = searchTerm.toLowerCase().trim();
  const filteredUsers = lower
    ? users.filter(
        (u) =>
          u.name.toLowerCase().includes(lower) ||
          u.username.toLowerCase().includes(lower) ||
          u.email.toLowerCase().includes(lower) ||
          u.address?.city?.toLowerCase().includes(lower)
      )
    : users;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-violet-200 dark:border-violet-800/40">
        <div>
          <h1 className="text-3xl font-extrabold text-violet-950 dark:text-white tracking-tight">
            Foydalanuvchilar ro'yxati
          </h1>
          <p className="mt-1 text-sm text-violet-600 dark:text-violet-300/70">
            Jami: {users.length} ta foydalanuvchi mavjud. Har bir card ustiga bosib to'liq ma'lumotni ko'rishingiz mumkin.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-violet-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Ism, email yoki shahar bo'yicha izlash..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-violet-300 dark:border-violet-700/50 bg-white dark:bg-violet-950/60 text-violet-900 dark:text-white placeholder-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-violet-400 hover:text-violet-600 dark:hover:text-violet-200"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {loading && <Loading text="Foydalanuvchilar ro'yxati yuklanmoqda... iltimos kuting" />}

      {!loading && error && (
        <div className="my-8 p-6 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-center">
          <div className="text-red-500 dark:text-red-400 text-3xl mb-2">⚠️</div>
          <p className="text-red-700 dark:text-red-300 font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 rounded-xl bg-red-600 dark:bg-red-700 text-white text-sm font-medium hover:bg-red-500 dark:hover:bg-red-600 transition-colors"
          >
            Qayta urinib ko'rish
          </button>
        </div>
      )}

      {!loading && !error && filteredUsers.length === 0 && (
        <div className="my-16 text-center py-12 px-4 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-dashed border-violet-300 dark:border-violet-700/40">
          <p className="text-violet-600 dark:text-violet-300/70 text-base">
            "{searchTerm}" so'rovi bo'yicha hech qanday foydalanuvchi topilmadi.
          </p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-3 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            Barcha foydalanuvchilarni ko'rsatish
          </button>
        </div>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredUsers.map((user) => (
            <Link
              key={user.id}
              to={`/users/${user.id}`}
              className="group block relative p-6 rounded-2xl bg-white dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/40 shadow-lg hover:shadow-violet-500/10 hover:border-violet-400 dark:hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-1 dark:animate-glow-pulse"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 text-white font-bold flex items-center justify-center text-xl shadow-lg shadow-violet-600/30 group-hover:scale-105 transition-transform">
                  {user.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-900/60 dark:text-violet-300 dark:border-violet-700/50">
                  #{user.id}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-violet-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {user.name}
                </h3>
                <p className="text-xs font-mono text-violet-600 dark:text-violet-400">@{user.username}</p>
              </div>

              <div className="mt-4 space-y-2 text-sm text-violet-600 dark:text-violet-200/70">
                <div className="flex items-center space-x-2 truncate"><span>📧</span><span className="truncate">{user.email}</span></div>
                <div className="flex items-center space-x-2 truncate"><span>📞</span><span className="truncate">{user.phone}</span></div>
                <div className="flex items-center space-x-2 truncate"><span>📍</span><span className="truncate">{user.address?.city}, {user.address?.street}</span></div>
                <div className="flex items-center space-x-2 truncate"><span>🏢</span><span className="truncate font-medium text-violet-800 dark:text-violet-100">{user.company?.name}</span></div>
              </div>

              <div className="mt-6 pt-4 border-t border-violet-100 dark:border-violet-800/40 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400">
                <span>To'liq ma'lumotni ko'rish</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default User;
