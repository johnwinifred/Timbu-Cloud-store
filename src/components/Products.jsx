import React, { useState, useEffect } from 'react';
import { FcLike } from 'react-icons/fc';
import Navbar from './Navbar';
import Cart from './Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../axiosConfig';
import { Link } from 'react-router-dom';

function Products() {
  
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [page, setPage] = useState(1); 
  const [cartsVisibility, setCartVisible] = useState(false); 
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || [] 
  );


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products', {
          params: {
            Appid: 'XP7UN6UGP0WG3R2',
            Apikey: 'c16ecadc4f8a498d830d6c699a3954aa20240713102602158556',
            organization_id: '4220d8ee89b24251be633251d0dc8ff6',
            reverse_sort: false,
            page: page,
            size: 9,
          },
        });
        console.log(response.data)
        console.log(response.data.items[0].current_price[0].NGN[0]);
        setItems(response.data.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); 

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  
  const addProductToCart = (product) => {
    const existingProduct = productsInCart.find((item) => item.id === product.id);
    if (existingProduct) {
      setProducts(productsInCart.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ));
      toast.info('Increased product quantity in the cart', {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      setProducts([...productsInCart, { ...product, count: 1 }]);
      toast.success('Product added to cart', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

 
  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = parseInt(count, 10);
      }
      return [...oldState];
    });
  };


  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === product.id);
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
    toast.error('Product removed from cart', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

 
  if (loading) {
    return <div className='text-black'>Loading...</div>;
  }

  if (error) {
    return <div className='text-black'>Error: {error}</div>;
  }

  return (
    <div>
    
      <Cart
        visibility={cartsVisibility}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <Navbar productsInCart={productsInCart} setCartVisible={setCartVisible} />
      
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {items.map((product) => (
          <div key={product.id} className="bg-[#F5F5F5] shadow-md rounded-lg p-0 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs text-red-500 border-l-0 rounded-lg bg-[#D9D9D9] px-2">Promo</p>
              <FcLike className='text-white' />
            </div>
            <div className='flex flex-col items-center p-4'>
               
              <Link to={`/products/${product.id}`}>
              <img className="w-full h-40 object-contain mb-4" src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} />
              </Link>
              <h4 className="text-lg font-semibold mb-2 text-black">{product.name}</h4>
              <p className="text-black mb-4">{product.price}</p>
              <div className='mt-6 flex justify-between items-center'>
                <button className="bg-[#EF5F43] text-white px-4 py-2 rounded-md"
                  onClick={() => addProductToCart(product)} >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-4">
        <button 
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page <= 1} 
          className="bg-[#EF5F43] text-white px-4 py-2 rounded-md"
        >
          Prev
        </button>
        <button 
          onClick={() => setPage(page + 1)}
          disabled={page >= 3} 
          className="bg-[#EF5F43] text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}


export default Products;
