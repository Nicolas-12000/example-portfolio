"use client";

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="toggle-knob" />
      {/* decorative icons for clarity, aria-hidden */}
      <Moon aria-hidden className="absolute left-2 top-1/2 -translate-y-1/2 opacity-70" size={14} />
      <Sun aria-hidden className="absolute right-2 top-1/2 -translate-y-1/2 opacity-70" size={14} />
    </button>
  );
}
