import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'; 
import MenuData from './data/menu.json';

// the function below is the one item that I will state or un-state by the handleCartsclick.
function MenuCard({ item,handleCartsClick,isInCart }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={item.imageUrl} className="w-full h-64 object-contain" alt={item.name} />
      <div className="p-4 flex-grow">
        <h3 className="text-2xl font-bold font-syne text-oil-100 mb-1">{item.name}</h3>
        <p className="text-gray-600 text-xl font-semibold">${item.price.toFixed(1)}</p> 
      </div>
      <div className="flex justify-end p-4">

      {/* Calls handleCartsClick with the current item on click */}
      <button onClick={() => handleCartsClick(item)} className="flex items-center justify-center text-white bg-oil-200 hover:bg-oil-300 py-2 px-4 gap-2 rounded-lg transition-transform transform hover:scale-105">
      
      {/* Button text changes based on whether the item is in the cart */}
          {isInCart ? 'Remove' : 'Add to Cart'}

          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
}

export default MenuCard;