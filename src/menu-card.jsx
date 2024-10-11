import React from "react";

function MenuCard({ item }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={item.imageUrl} className="w-full h-64 object-contain" alt={item.name} />
      <div className="p-2">
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price.toFixed(1)}</p> 
        {/* after this gets imported to the App.jsx, each item.___ will be replaced to the items in the array of objects */}
      </div>
    </div>
  );
}

export default MenuCard;