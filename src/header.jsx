
import React from 'react';

const header = () => {
  return (
    <header className="inset-0 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="font-syne text-2xl font-bold text-pastelOrange-100">Cafe</div>

        <button className="hidden md:block bg-oil-200 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">Order Now</button>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-indigo-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default header;
