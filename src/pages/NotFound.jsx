import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl font-black text-violet-300 dark:text-violet-600/20 select-none">404</div>
      <h1 className="mt-4 text-3xl font-extrabold text-violet-950 dark:text-white">Sahifa topilmadi</h1>
      <p className="mt-3 text-base text-violet-600 dark:text-violet-300/60">
        Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/" className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors shadow-lg shadow-violet-600/25">
          Bosh sahifaga qaytish
        </Link>
        <Link to="/users" className="px-5 py-2.5 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 border border-violet-300 dark:bg-violet-950/60 dark:hover:bg-violet-900/60 dark:text-violet-200 dark:border-violet-700/50 font-medium text-sm transition-colors">
          Foydalanuvchilarni ko'rish
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
