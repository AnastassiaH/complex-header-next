import Link from "next/link";
import { NavItem } from "@/app/components/Header";
import NavLinkOpenBlock from "./Sublinks/NavLinkOpenBlock";

interface NavItemProps {
  item: NavItem;
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
      <Link href={`/${item.id}`}
        className="h-full flex items-center text-white hover:text-gray-300 transition-colors">
        {item.label}

      </Link>
      {hasSublinks && <NavLinkOpenBlock activeNav={activeNav} navItem={item} />}
    </li>
  )
}

export default NavItemComponent