import React from 'react';
import heroImage from '../assets/react.svg'; // Ensure you have a relevant hero image in your assets folder

const HeroSection = () => {
  return (
    <div className="bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Kick back and relax!</h1>
      <p className="text-xl mb-6">
        Cozy up with our range of stylish sofas starting from <span className="text-red-500">Rs. 549/month</span>
      </p>
      <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg">Rent Now</button>
      <img src={heroImage} alt="Hero" className="mx-auto mt-6" />
    </div>
  );
};

export default HeroSection;
