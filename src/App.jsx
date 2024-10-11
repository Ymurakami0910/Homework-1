import React, { useState } from "react";
import MenuCard from "./menu-card"
// import the card component I have created

// This is an array of objects, each representing a menu item for the cafe
const DEFAULT_MENU = [
  {
    id: 1,
    name: "Waffle",
    price: 4.99,
    imageUrl: "https://oishiso.jp/wp-content/uploads/2019/05/waffle.png" 
  },
  {
    id: 2,
    name: "Pudding",
    price: 5.49,
    imageUrl: "https://oishiso.jp/wp-content/uploads/2024/03/Pudding.png"
  },
  {
    id: 3,
    name: "Cake",
    price: 7.99,
    imageUrl: "https://oishiso.jp/wp-content/uploads/2018/03/Shortcake.png"
  },
  {
    id: 4,
    name: "Ice cream",
    price: 5.04,
    imageUrl: "https://oishiso.jp/wp-content/uploads/2019/04/vanillaIcecream.png"
  },
  {
    id: 5,
    name: "Dango",
    price: 7.088,
    imageUrl: "https://oishiso.jp/wp-content/uploads/2023/08/dango-mitarashi.png"
  },

  
];
function App() {
  // define the menuItems as a set of list contains the menu items (create a state variable)
  const [menuItems] = useState(DEFAULT_MENU);
  
  return (
    <div className="bg-gradient-to-r from-pastelOrange-100 to-pastelOrange-200 min-h-screen p-8">
      <h1 className="font-syne text-center text-4xl font-bold text-white mb-8">Cafe Menu</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* This is a map method passes through the menuItems array, 
        and each element (in this case, item refers to a menu item object) is passed to the MenuCard component */}
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
        {/* key should be added and unique that prevent warning in the console */}
        {/* item - Inside the MenuCard component, I can access this prop to get details about the menu item */}
      </div>
    </div>
  );
}

export default App
