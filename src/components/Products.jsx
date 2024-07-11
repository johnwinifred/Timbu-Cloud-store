import React, { useState, useEffect } from 'react';
import products from './Productdata'
import { FcLike } from 'react-icons/fc';
import Navbar from './Navbar';
import Cart from './Cart';
import { toast } from 'react-toastify';

function Products() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F5F5F5] shadow-md rounded-lg p-0 flex flex-col">
            <div className="flex justify-between items-center mb-2 ">
              <p className="text-xs text-red-500 border-l-0 rounded-lg bg-[#D9D9D9] px-2">Promo</p>
              <FcLike className='text-white' />
            </div>
            <div className='flex flex-col items-center p-4'>
              <img className="w-full h-40 object-contain mb-4" src={product.image} alt={product.name} />
              <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-700 mb-4">{product.price}</p>
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
    </div>
  );
}

export default Products;
