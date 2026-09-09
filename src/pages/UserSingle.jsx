import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const panelClass =
  'p-6 rounded-2xl bg-white dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/40 shadow-lg backdrop-blur-sm space-y-4';

function UserSingle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError(err.response?.status === 404
          ? `ID: ${id} bo'lgan foydalanuvchi topilmadi`
          : (err.message || "Foydalanuvchi ma'lumotlarini yuklashda xatolik yuz berdi"));
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserDetail();
  }, [id]);

  const btnSecondary =
    'px-3 py-2 rounded-xl text-xs font-semibold bg-violet-100 hover:bg-violet-200 text-violet-800 border border-violet-300 dark:bg-violet-950/60 dark:hover:bg-violet-900/60 dark:text-violet-200 dark:border-violet-700/50 transition-colors';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <button
          onClick={() => navigate(-1)}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium ${btnSecondary} cursor-pointer`}
        >
          <span>← Orqaga</span>
        </button>

        <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-violet-500 dark:text-violet-400/60">
          <Link to="/" className="hover:text-violet-700 dark:hover:text-violet-300 hover:underline">Bosh sahifa</Link>
          <span>/</span>
          <Link to="/users" className="hover:text-violet-700 dark:hover:text-violet-300 hover:underline">Foydalanuvchilar</Link>
          <span>/</span>
          <span className="text-violet-600 dark:text-violet-400 font-semibold">User #{id}</span>
        </div>
      </div>

      {loading && (
        <div className="py-12">
          <Loading text={`Foydalanuvchi #${id} ma'lumotlari yuklanmoqda...`} />
        </div>
      )}

      {!loading && error && (
        <div className="p-8 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-center my-8">
          <div className="text-red-500 dark:text-red-400 text-4xl mb-3">⚠️</div>
          <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Xatolik yuz berdi</h2>
          <p className="text-violet-600 dark:text-violet-300/70 text-sm mb-6">{error}</p>
          <Link to="/users" className="inline-flex items-center px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors shadow-lg shadow-violet-600/25">
            Foydalanuvchilar ro'yxatiga qaytish
          </Link>
        </div>
      )}

      {!loading && !error && user && (
        <div className="space-y-8 animate-fadeIn">
          <div className="p-8 rounded-3xl bg-white dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/40 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-violet-600 via-purple-600 to-fuchsia-500 text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-lg shadow-violet-600/30 shrink-0">
                {user.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-violet-950 dark:text-white">{user.name}</h1>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-900/60 dark:text-violet-300 dark:border-violet-700/50">
                    ID: #{user.id}
                  </span>
                </div>
                <p className="text-sm font-mono text-violet-600 dark:text-violet-400">@{user.username}</p>
                <p className="text-sm text-violet-600 dark:text-violet-300/60">
                  Kompaniya: <span className="font-semibold text-violet-900 dark:text-violet-100">{user.company?.name}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={panelClass}>
              <div className="flex items-center space-x-3 pb-3 border-b border-violet-100 dark:border-violet-800/40">
                <span className="text-2xl">📞</span>
                <h2 className="text-lg font-bold text-violet-950 dark:text-white">Aloqa ma'lumotlari</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Elektron pochta (Email)</span>
                  <a href={`mailto:${user.email}`} className="mt-1 inline-block font-medium text-violet-600 dark:text-violet-400 hover:underline">{user.email}</a>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Telefon raqam</span>
                  <a href={`tel:${user.phone}`} className="mt-1 inline-block font-medium text-violet-800 dark:text-violet-200 hover:text-violet-600">{user.phone}</a>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Veb-sayt</span>
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="mt-1 inline-block font-medium text-violet-600 dark:text-violet-400 hover:underline">https://{user.website}</a>
                </div>
              </div>
            </div>

            <div className={panelClass}>
              <div className="flex items-center space-x-3 pb-3 border-b border-violet-100 dark:border-violet-800/40">
                <span className="text-2xl">📍</span>
                <h2 className="text-lg font-bold text-violet-950 dark:text-white">Yashash manzili</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Shahar & Ko'cha</span>
                  <p className="mt-1 font-medium text-violet-800 dark:text-violet-100">{user.address?.city}, {user.address?.street}, {user.address?.suite}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Pochta indeksi (Zipcode)</span>
                  <p className="mt-1 font-medium text-violet-800 dark:text-violet-100 font-mono">{user.address?.zipcode}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Geolokatsiya</span>
                  <p className="mt-1 font-mono text-xs text-violet-600 dark:text-violet-300/60">Latitude: {user.address?.geo?.lat} | Longitude: {user.address?.geo?.lng}</p>
                </div>
              </div>
            </div>

            <div className={`md:col-span-2 ${panelClass}`}>
              <div className="flex items-center space-x-3 pb-3 border-b border-violet-100 dark:border-violet-800/40">
                <span className="text-2xl">🏢</span>
                <h2 className="text-lg font-bold text-violet-950 dark:text-white">Kompaniya haqida to'liq ma'lumot</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Kompaniya nomi</span>
                  <p className="mt-1 text-base font-bold text-violet-950 dark:text-white">{user.company?.name}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Shior (Catch Phrase)</span>
                  <p className="mt-1 italic text-violet-700 dark:text-violet-200/70">"{user.company?.catchPhrase}"</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-violet-500 font-semibold block">Biznes strategiya (BS)</span>
                  <p className="mt-1 font-medium text-violet-600 dark:text-violet-400 capitalize">{user.company?.bs}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
            <Link to="/users" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors shadow-lg shadow-violet-600/25">
              ← Barcha foydalanuvchilarga qaytish
            </Link>
            <div className="flex items-center gap-3">
              {Number(id) > 1 && <Link to={`/users/${Number(id) - 1}`} className={`${btnSecondary} flex-1 justify-center sm:flex-none`}>← Oldingi (#{Number(id) - 1})</Link>}
              {Number(id) < 10 && <Link to={`/users/${Number(id) + 1}`} className={`${btnSecondary} flex-1 justify-center sm:flex-none`}>Keyingi (#{Number(id) + 1}) →</Link>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSingle;
