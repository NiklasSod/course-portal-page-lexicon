import navigationData from '../../public/data/navigation.json';
import { scrollToElement } from '../utils/scroll';

interface NavListProps {
  ulClassName: string;
  onItemClick?: () => void;
}

function NavList({ ulClassName, onItemClick }: NavListProps) {
  return (
    <ul className={ulClassName}>
      {navigationData.map((item) => (
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
  );
}

export default NavList;