import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">CryptoTracker</div>
        <div>
          <a href="#features" className="text-white px-3">Features</a>
          <a href="#testimonials" className="text-white px-3">Testimonials</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
