import React from 'react';
import { useTheme } from '@skagami/gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi'; // importing icons from react-icons

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  if (theme === null) {
    return null;
  }

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-900 flex flex-row items-center justify-evenly">
        <FiMoon className='primary-text' />
        <FiSun className='primary-text' />
      </div>
    </label>
  );
}
