import React, { useState } from "react";
import MenuCard from "./menu-card";
import Header from "./header";
import Banner from "./Banner";
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

  const [menuItems,setMenu] = useState(DEFAULT_MENU);
  // menuItems contains the  DEFAULT_MENU value (in this case, an array of objects)
  // The setMenu function is used to update the menuItems state. I will use setMenu to assign a new array or new data to menuItems

  const [carts,addcarts]= useState([]);

  const handleCartsClick = (item) => {
    if (carts.includes(item)){
      const newCarts = carts.filter((singleItem)=>{
        const newCarts = carts.filter((singleItem) => singleItem !== item);
        addcarts(newCarts); // carts を更新する
        console.log("An item is removed");
      });



    }

    else{
      console.log(item); 
      addcarts([...carts, item]); // Adds the clicked item to the carts array
      // ... - creates a new array that contains all the current items in carts followed by the new item a user is adding.
      console.log("an item is added");
    }


  };



  return (

    <main className="bg-gradient-to-r from-pastelOrange-100 to-pastelOrange-200 min-h-screen">
      <Header /> 
      <Banner/>
      <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
        {/* This is a map method passes through the menuItems array, 
        and each element (in this case, item refers to a menu item object) is passed to the MenuCard component */}
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} handleCartsClick={handleCartsClick} isInCart={carts.includes(item)} />
        ))}
        {/* key should be added and unique that prevent warning in the console */}
        {/* item - Inside the MenuCard component, I can access this prop to get details about the menu item */}
      </div>
    </main>
  );
}

export default App
