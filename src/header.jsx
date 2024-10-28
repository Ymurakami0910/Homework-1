
import React from 'react';
  
const header = () => {
  return (
    <header className="inset-0 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="font-syne text-2xl font-bold text-pastelOrange-100">Cafe</div>

        <button className="md:block bg-oil-200 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">Order Now</button>
      

      </div>
    </header>
  );
};

export default header;
