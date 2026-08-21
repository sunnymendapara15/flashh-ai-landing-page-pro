import { useEffect, useState } from 'react';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem('flashh-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (e) {
    /* ignore storage errors */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

/**
 * Dark/light theme with system detection and persisted preference.
 * Applies a data-theme attribute + colorScheme to the root element.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem('flashh-theme', theme);
    } catch (e) {
      /* ignore storage errors */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return [theme, toggle];
}
