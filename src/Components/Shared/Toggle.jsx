import { useEffect, useState } from 'react';

import { MdNightsStay } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
const Toggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saveTheme) {
      setTheme(saveTheme)
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <div onClick={toggleTheme} className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 transition-all duration-300 cursor-pointer relative">
      <div className="w-6 h-6 bg-white rounded-full shadow-md absolute left-1 top-1 transition-all duration-300 translate-x-0 dark:translate-x-8" />
      <div className="z-10 text-yellow-500">
        <WiDaySunny size={20} />
      </div>
      <div className="ml-auto z-10 text-blue-300">
        <MdNightsStay size={18} />
      </div>
    </div>
  );
};

export default Toggle;