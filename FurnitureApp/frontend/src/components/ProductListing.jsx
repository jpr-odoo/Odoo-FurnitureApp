import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { name: 'Sofa Set', price: 'Rs. 549/month', image: 'path_to_image' },
  { name: 'Dining Table', price: 'Rs. 749/month', image: 'path_to_image' },
  // Add more products as needed
];

const ProductListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default ProductListing;
