import React from 'react';
import Smartwatch from '../assets/smartwatch.png'
import Smartwatch2 from '../assets/smartwatch2.png'
import Earphone from '../assets/earphone.png'
import Mp3player from '../assets/mp3player.png'
import Macbook from '../assets/laptop.png'
import Iphone from '../assets/iphone12.png'
import { FcLike } from "react-icons/fc";
import {Link} from 'react-router-dom'


const products = [
  {
    id: 1,
    name: "Earphone",
    price: '#15,000',
    image: Earphone 
  },

  {
    id: 2,
    name: "Smart Watch",
    price: '#15,000',
    image: Smartwatch
  },
  {
    id: 3,
    name: "MP3 Player",
    price: '#15,000',
    image: Mp3player
  },
  {
    id: 4,
    name: "Smart Watch",
    price: '#15,000',
    image: Smartwatch2
  },
  {
    id: 5,
    name: "iPhone 12",
    price: '#700,000',
    image: Iphone
  },
  {
    id: 6,
    name: "MacBook Air",
    price: '#615,000',
    image: Macbook
  }
];

function ProductCard ({ onAddToCart }) {
  // const { addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-[#F5F5F5] shadow-md rounded-lg p-0 flex flex-col">
          <div className="flex justify-between items-center mb-2 ">
            <p className="text-xs text-red-500 border-l-0 rounded-lg bg-[#D9D9D9] px-2">Promo</p>
            <FcLike className='text-white'/>
          </div>
          <div className='flex flex-col items-center p-4'>
          <img className="w-full h-40 object-contain mb-4" src={product.image} alt={product.name} />
          <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
          <p className="text-gray-700 mb-4">{product.price}</p>
  
          <Link to={'/cart'}>
          <button className="bg-[#EF5F43] text-white px-4 py-2 rounded-md"  onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
