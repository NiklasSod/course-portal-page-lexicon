import headerNavData from '../../public/data/headerNavigation.json';
import { scrollToElement } from '../utils/scroll';

interface HeaderNavProps {
  navClassName: string;
  ulClassName: string;
  onItemClick?: () => void;
}

function HeaderNav({ navClassName, ulClassName, onItemClick }: HeaderNavProps) {
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