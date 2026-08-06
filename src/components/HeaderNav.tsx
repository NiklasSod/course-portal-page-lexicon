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
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
  document.documentElement.classList.toggle('light', isLight);
}, [isLight]);

  const toggleLightMode = () => {
    setIsLight(!isLight);
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
        onClick={toggleLightMode}
        className={`px-3 py-1 rounded-md border border-[var(--color-border)] text-[var(--color-body)] hover:text-[var(--color-menu)] transition-colors bg-transparent cursor-pointer text-sm flex items-center ${isMobile && 'mb-3'}`}
        aria-label="Växla mörkt läge"
      >
        {isLight ? '🌙 Mörkt läge' : '☀️ Ljust läge'}
      </button>
      <ul className={ulClassName}>
        {headerNavData.map((item) => (
          <li key={item.target}>
            <button 
              onClick={() => {
                scrollToElement(item.target);
                if (onItemClick) onItemClick();
              }} 
              className="text-[var(--color-subheading)] hover:text-[var(--color-body)] no-underline  transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
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