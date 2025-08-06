import Link from "next/link";
import { Navigation } from "@/app/config/navData";
import NavLinkActiveBlock from "./Sublinks/NavLinkActiveBlock";

interface NavItemProps {
  item: Navigation;
  activeNav: string | null;
  setActiveNav: (nav: string) => void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ item, activeNav, setActiveNav }) => {
  const hasSublinks = !!item.children?.length;

  return (
    <li
      key={item.id}
      className="h-full px-2"
      onMouseEnter={() => setActiveNav(item.id)}
    >
      <Link href={item.path}
        className="h-full flex items-center text-white hover:text-gray-300 transition-colors">
        {item.label}

      </Link>
      {hasSublinks && <NavLinkActiveBlock activeNav={activeNav} navItem={item} />}
    </li>
  )
}

export default NavItemComponent