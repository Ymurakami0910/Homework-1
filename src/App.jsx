import React, { useEffect, useState } from "react";
import Header from "./header";
import Banner from "./Banner";
import MenuCard from "./menu-card";
import Footer from "./footer";



// import the card component I have created

// // This is an array of objects, each representing a menu item for the cafe
// const DEFAULT_MENU = [
//   {
//     id: 1,
//     name: "Waffle",
//     price: 4.99,
//     imageUrl: "https://oishiso.jp/wp-content/uploads/2019/05/waffle.png" 
//   },
//   {
//     id: 2,
//     name: "Pudding",
//     price: 5.49,
//     imageUrl: "https://oishiso.jp/wp-content/uploads/2024/03/Pudding.png"
//   },
//   {
//     id: 3,
//     name: "Cake",
//     price: 7.99,
//     imageUrl: "https://oishiso.jp/wp-content/uploads/2018/03/Shortcake.png"
//   },
//   {
//     id: 4,
//     name: "Ice cream",
//     price: 5.04,
//     imageUrl: "https://oishiso.jp/wp-content/uploads/2019/04/vanillaIcecream.png"
//   },
//   {
//     id: 5,
//     name: "Dango",
//     price: 7.088,
//     imageUrl: "https://oishiso.jp/wp-content/uploads/2023/08/dango-mitarashi.png"
//   },

  
// ];
function App() {

  const [menuItems,setMenu] = useState([]);
  const [carts, addCarts] = useState('');


  // Local storage

  useEffect(()=>{
    if (menuItems.length > 0){
      localStorage.setItem("menuItems", JSON.stringify(menuItems))
    }},
    [menuItems]);
  
    useEffect(()=>{
      const storeItems = JSON.parse(localStorage.getItem("menuItems"));
      if (storeItems) {
        setMenu(storeItems);
    }
    },
    [])

    const completeMenu = (id) => {
      setMenu((currentCarts) => {
        const updatedMenu = currentItems.filter(item => item.id !== id);
        localStorage.setItem("menuItems", JSON.stringify(updatedMenu)); // updated local 
        return updatedMenu; 
      });
  };






  const handleCartsClick = (item) => {
    // Check if the item is already in the carts array
    if (carts.includes(item)) {
      // If the item is already in the cart, filter it out
      const newCarts = carts.filter((singleItem) => singleItem !== item);
      
      // Update the carts state with the new carts array (without the removed item)
      addCarts(newCarts); // updates
      
      // Log a message to the console indicating that an item was removed
      console.log("An item is removed");
    } else {
      // If the item is not in the cart, log the item to the console
      console.log(item); 
      
      // Add the clicked item to the carts array by creating a new array with the existing items and the new item
      addCarts([...carts, item]); // Adds the clicked item to the carts array
      
      // Log a message to the console indicating that an item was added
      console.log("An item is added");
    }
  }; 



  return (

    <main className="bg-gradient-to-r from-pastelOrange-100 to-pastelOrange-200 min-h-screen">
      <Header /> 
      <Banner/>
      <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container p-8">
        {/* This is a map method passes through the menuItems array, 
        and each element (in this case, item refers to a menu item object) is passed to the MenuCard component */}
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} handleCartsClick={handleCartsClick} isInCart={carts.includes(item)} completeMenu={completeMenu}  />
        ))}
        {/* key should be added and unique that prevent warning in the console */}
        {/* item - Inside the MenuCard component, I can access this prop to get details about the menu item */}
      </div>
      <Footer />
    </main>
  );
}

export default App
