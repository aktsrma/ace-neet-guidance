
import { NEET_CATEGORIES } from "@/constants/blogCategories";
import { Badge } from "@/components/ui/badge";
import { type Category } from "@/constants/blogCategories";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onSelectCategory(null)}
        >
          All
        </Badge>
        {NEET_CATEGORIES.map((category) => (
          <Badge
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
