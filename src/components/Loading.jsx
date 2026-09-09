import React from 'react';

function Loading({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-violet-200 dark:border-violet-900 border-t-violet-600 dark:border-t-violet-500 rounded-full animate-spin"></div>
        <div className="absolute w-6 h-6 bg-violet-500/20 rounded-full animate-ping"></div>
      </div>
      <p className="mt-4 text-base font-medium text-violet-600 dark:text-violet-300/80 tracking-wide animate-pulse">
        {text}
      </p>
    </div>
  );
}

export default Loading;
