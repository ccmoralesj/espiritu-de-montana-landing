import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Category } from "@/interfaces/Adventure";

interface CategorySwitcherProps {
  options: { label: string; value: Category }[];
  selected: string;
  onSelect: Dispatch<SetStateAction<Category>>;
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
  options,
  selected,
  onSelect,
}) => (
  <div className="flex gap-4 overflow-x-auto w-full pb-4 lg:w-auto scrollbar-hide items-center py-4 lg:py-4">
    {options.map(({ label, value }) => (
      <Button
        key={value}
        variant={selected === value ? "default" : "outline"}
        className={`font-body px-6 py-3 rounded-full transition-all ${selected === value
          ? "bg-primary text-primary-foreground"
          : "border-secondary text-secondary hover:bg-primary hover:text-white"
          }`}
        onClick={() => onSelect(value)}
      >
        {label.toUpperCase()}
      </Button>
    ))}
  </div>
);

export default CategorySwitcher;
