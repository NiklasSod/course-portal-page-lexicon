import { useState, useEffect } from 'react';
import axios from 'axios';
import { scrollToElement } from '../utils/scroll';

interface NavItem {
  target: string;
  label: string;
}

interface HeaderNavProps {
  navClassName: string;
  ulClassName: string;
  onItemClick?: () => void;
  isMobile?: boolean;
}

function HeaderNav({ navClassName, ulClassName, onItemClick, isMobile }: HeaderNavProps) {
  const [headerNavData, setHeaderNavData] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', isDark);
  };

  useEffect(() => {
    axios.get<NavItem[]>('/data/headerNavigation.json')
      .then((response) => {
        setHeaderNavData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading navigation data:', error);
        setLoading(false);
        setError('Error loading navigation data:');
      });
  }, []);

  if (loading) return null;

  if (error || !Array.isArray(headerNavData)) {
    return <p className="text-red-500 text-sm">{error || 'Ogiltig datastruktur.'}</p>;
   }

  return (
    <nav className={navClassName}>
      <button
        onClick={toggleDarkMode}
        className={`px-3 py-1 rounded-md border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 transition-colors bg-transparent cursor-pointer text-sm flex items-center ${isMobile && 'mb-3'}`}
        aria-label="Växla mörkt läge"
      >
        {isDark ? '☀️ Ljust läge' : '🌙 Mörkt läge'}
      </button>
      <ul className={ulClassName}>
        {headerNavData.map((item) => (
          <li key={item.target}>
            <button 
              onClick={() => {
                scrollToElement(item.target);
                if (onItemClick) onItemClick();
              }} 
              className="text-slate-400 hover:text-slate-200 no-underline  transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;