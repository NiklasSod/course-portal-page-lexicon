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
}

function HeaderNav({ navClassName, ulClassName, onItemClick }: HeaderNavProps) {
  const [headerNavData, setHeaderNavData] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/data/headerNavigation.json')
      .then((response) => {
        setHeaderNavData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading navigation data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {headerNavData.map((item) => (
          <li key={item.target}>
            <button 
              onClick={() => {
                scrollToElement(item.target);
                if (onItemClick) onItemClick();
              }} 
              className="text-menu no-underline hover:text-neutral-900 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
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