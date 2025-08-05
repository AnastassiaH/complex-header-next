'use client'

import { NavItem } from "../Header";
import { useState } from "react";
import NavItemComponent from "./NavItemComponent";

interface NavbarProps {
  navItems: NavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const clearActiveLink = () => {
    setActiveNav(null);
  };

  return (
    <nav className="h-full flex-grow">
      <ul className="h-full flex justify-center gap-6"
        onMouseLeave={clearActiveLink}
      >
        {navItems.map((item) => (
          <NavItemComponent
            key={item.id}
            item={item}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
        ))}
      </ul>
    </nav>
  )
}