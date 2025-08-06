'use client'

import { useState } from "react";
import NavItemComponent from "./NavItemComponent";
import { Navigation } from "@/app/config/navData";
import { navItems } from "@/app/config/navData";

export default function Navbar() {
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