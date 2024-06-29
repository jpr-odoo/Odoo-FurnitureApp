import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full mb-4" />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-red-500">{price}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">Rent Now</button>
    </div>
  );
};

export default ProductCard;
