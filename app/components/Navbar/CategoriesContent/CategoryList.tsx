import { NavCategory } from "@/app/config/navData";

interface CategoryListProps {
  categories: NavCategory[];
  activeCategory: NavCategory | null;
  setActiveCategory: (category: NavCategory) => void;
}

const CategoryList = ({ categories, activeCategory, setActiveCategory }: CategoryListProps) => {
  return (
    <ul
      className="w-[200px] h-full flex flex-col gap-3 border-r-2 border-gray-600 pr-4 py-2"
    >
      {categories.map((category) => (
        <li
          key={category.name}
          className={`block p-2 hover:bg-gray-600 rounded transition-colors ${activeCategory?.name === category.name ? 'bg-gray-600' : ''}`}
          onMouseEnter={() => setActiveCategory(category)}
        >
          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </li>
      ))}
    </ul>
  )
}

export default CategoryList