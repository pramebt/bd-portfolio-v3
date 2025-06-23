import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};
