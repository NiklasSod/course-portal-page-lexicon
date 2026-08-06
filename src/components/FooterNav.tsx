import { useState, useEffect } from 'react';
import axios from 'axios';

interface FooterNavItem {
  href: string;
  label: string;
}

function FooterNav() {
  const [footerNavData, setFooterNavData] = useState<FooterNavItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/data/footerNavigation.json')
      .then((response) => {
        setFooterNavData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading footer navigation data:', error);
        setLoading(false);
        setError('Error loading footer navigation data');
      });
  }, []);

  if (loading) return null;

  if (error || !Array.isArray(footerNavData)) {
    return <p className="text-red-500 text-sm">{error || 'Ogiltig datastruktur.'}</p>;
  }

  return (
    <nav>
        <ul className="flex gap-8 list-none m-0 p-0">
        {footerNavData.map((item) => (
            <li key={item.href}>
            <a href={item.href} className="text-sm text-footer-text hover:text-stone-500 no-underline transition-colors leading-none">
              {item.label}
            </a>
            </li>
        ))}
        </ul>
    </nav>
  );
}

export default FooterNav;