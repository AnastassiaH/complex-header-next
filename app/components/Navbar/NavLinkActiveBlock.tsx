import { useState } from "react";
import { ContentWrapper } from "@/app/components/ui";
import { Navigation, NavCategory } from "@/app/config/navData";
import CategoryList from "@/app/components/Navbar/CategoriesContent/CategoryList";

interface SublinksBlockProps {
  activeNav: Navigation | null;
}

const NavLinkActiveBlock = ({ activeNav }: SublinksBlockProps) => {
  const [activeCategory, setActiveCategory] = useState<NavCategory | null>(activeNav?.categories?.[0] || activeNav?.children?.[0] || null);
  const categoryComponent = activeCategory ? activeCategory.component : null;

  return (
    <div
      className={`absolute top-[72px] left-0 right-0 bg-gray-700 w-full text-white overflow-hidden
        ${activeNav
          ? 'h-96 py-10'
          : 'h-0 py-0'
        }`}
    >
      <ContentWrapper className="h-full">
        <div className="flex h-full" onMouseLeave={() => setActiveCategory(null)}>
          <CategoryList
            categories={activeNav?.categories || activeNav?.children || []}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <div className="flex-1 px-10">
            {categoryComponent && categoryComponent()}
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default NavLinkActiveBlock