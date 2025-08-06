import { useState } from "react";
import { ContentWrapper } from "@/app/components/ui";
import Link from "next/link";
import { Navigation } from "@/app/config/navData";

interface SublinksBlockProps {
  activeNav: string | null;
  navItem: Navigation;
}

const NavLinkOpenBlock = ({ activeNav, navItem }: SublinksBlockProps) => {
  const [activeSublink, setActiveSublink] = useState<string | null>(null);
  const sublink = navItem?.children?.find((sublink) => sublink.id === activeSublink);
  const SublinkContentComponent = sublink ? sublink.component : null;

  return (
    <div
      className={`absolute top-[72px] left-0 right-0 bg-gray-700 w-full text-white overflow-hidden
        ${activeNav === navItem.id
          ? 'h-96 py-10'
          : 'h-0 py-0'
        }`}
    >
      <ContentWrapper className="h-full">
        <div className="flex h-full" onMouseLeave={() => setActiveSublink(null)}>
          <div
            className="w-[200px] h-full flex flex-col gap-4 border-r-2 border-gray-600 pr-4 py-2"
          >
            {activeNav && navItem.children?.map((sublinkItem, index) => (
              <Link
                key={index}
                href={`/${activeNav}/${sublinkItem.id}`}
                className="block p-2 hover:bg-gray-600 rounded transition-colors"
                onMouseEnter={() => setActiveSublink(sublinkItem.id)}
              >
                {sublinkItem.label}
              </Link>
            ))}
          </div>
          <div className="flex-1 px-10">
            {SublinkContentComponent && <SublinkContentComponent />}
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default NavLinkOpenBlock