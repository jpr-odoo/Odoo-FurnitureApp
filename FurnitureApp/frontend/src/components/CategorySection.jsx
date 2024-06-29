import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { name: 'Packages', icon: 'path_to_icon' },
  { name: 'Furniture', icon: 'path_to_icon' },
  { name: 'Appliances', icon: 'path_to_icon' },
  { name: 'Fitness', icon: 'path_to_icon' },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-12 p-6">
      {categories.map((category, index) => (
        <CategoryCard key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
};

export default CategorySection;
