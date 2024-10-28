import React from 'react';

const Footer = () => {
  return (
<footer className="bg-white text-gray-500 text-sm p-8">
  <div className="flex flex-col md:flex-row md:justify-between">
    <h1 className="font-syne text-2xl font-bold text-pastelOrange-100 mb-4 md:mb-0">cafe</h1>
    <ul className="flex flex-wrap mb-8 md:mb-0">
      <li className="mr-4">
        <a href="#" className="hover:text-black">About</a>
      </li>
      <li className="mr-4">
        <a href="#" className="hover:text-black">Menu</a>
      </li>
      <li>
        <a href="#" className="hover:text-black">Privacy Policy</a>
      </li>
    </ul>
  </div>
  <hr className="border-indigo-600" />
  <p className="text-center md:text-left mt-4">
    © 2024 <a href="#" className="hover:text-black">Yurino Murakami</a> All Rights Reserved.
  </p>
</footer>

  );
};

export default Footer;
