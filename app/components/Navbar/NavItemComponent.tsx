import Link from "next/link";
import { Navigation } from "@/app/config/navData";
import NavLinkActiveBlock from "./NavLinkActiveBlock";

interface NavItemProps {
  item: Navigation;
  activeNav: Navigation | null;
  setActiveNav: (nav: Navigation) => void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ item, activeNav, setActiveNav }) => {
  const isMoreInfo = !!item.categories?.length || !!item.children?.length;
  const isItemActive = item.id === activeNav?.id;

  return (
    <li
      key={item.id}
      className={`h-full px-2 ${isItemActive ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`}
      onMouseEnter={() => setActiveNav(item)}
    >
      <Link href={item.path}
        className="h-full flex items-center text-white hover:text-gray-300 transition-colors">
        {item.label}

      </Link>
      {isMoreInfo && isItemActive && <NavLinkActiveBlock activeNav={activeNav} />}
    </li>
  )
}

export default NavItemComponent