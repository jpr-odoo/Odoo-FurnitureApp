import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
