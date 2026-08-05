import footerNavigationData from '../../public/data/footerNavigation.json';

function FooterNav() {
  return (
    <nav>
        <ul className="flex gap-8 list-none m-0 p-0">
        {footerNavigationData.map((item) => (
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