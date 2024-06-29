import React from 'react';

const CategoryCard = ({ name, icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src={icon} alt={name} className="w-16 mx-auto mb-4" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default CategoryCard;
