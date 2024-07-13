import React from 'react'
import Layout from '../components/Layout'
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import axios from '../../axiosConfig';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';

const fetchProduct = async (id) => {
  const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${id}`, {
    params: {
      id: id,
      Appid: 'XP7UN6UGP0WG3R2',
      Apikey: 'c16ecadc4f8a498d830d6c699a3954aa20240713102602158556',
      organization_id: '4220d8ee89b24251be633251d0dc8ff6',
    },
  });
  
  return response.data;
  console.log(response.data);
};

export default function ProductDescription() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});
  const [cartsVisibility, setCartVisible] = useState(false); 
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || [] 
  );


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);
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
    <Layout>
      <Cart 
       visibility={cartsVisibility}
       products={productsInCart}
       onClose={() => setCartVisible(false)}
       onQuantityChange={onQuantityChange}
       onProductRemove={onProductRemove}/>
       <Navbar productsInCart={productsInCart} setCartVisible={setCartVisible} />
      <div className='border w-full text-center text-2xl bg-[#EF5F43] text-white px-4 py-2 rounded-md'>Product Description</div>
        <div className=' font-[Inter] grid grid-cols-1 lg:grid-cols-2 pt-12 gap-12'>
          <div className=' p-6 grid grid-cols-2 bg-white'>
            <div>
            <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product?.name} /> 
            </div>
          <div>
          <p className='font-semibold text-xl pb-4'>{product?.name}</p>
          <h3 className='text-black pb-4'>{product?.description}</h3>
          
         
           <p className='font-semibold'>Price: <span className='text-black'>{product[0]?.current_price[0]?.NGN[0]}</span> </p> 
           <div className='mt-6 flex justify-between items-center'>
                <button className="bg-[#EF5F43] text-white px-4 py-2 rounded-md"
                  onClick={() => addProductToCart(product)} >
                  Add to cart
                </button>
              </div>

          </div>
          
         
            
          </div>
          <div className='flex flex-col p-4 bg-[#D9D9D9]'>
             <div>
                <p className='font-semibold'>Delivery Details</p>
                <div className='grid grid-cols-3 gap-2 items-center'>
                <IoLocationOutline />

                    <span>
                        <p>Opp FGS Airport Road Ogunu Warri, Delta State</p>
                        <p>To be delivery by DHL Logostics</p>
                    </span>
                    <a href="" className='text-[#008080]'>Change</a>
                </div>
             </div>
             <hr className=' border border-black'/>
             <div className='grid grid-cols-3 gap-2 items-center'>
             <span>
             <IoCartOutline />
             <HiOutlineCash />
             </span>

                    <span>
                        <p>Standard Delivery</p>
                        <p>Cash on Delivery</p>
                    </span>
                    <a href="" className='text-[#008080]'>#25,000</a>
                </div>
                <hr className=' border border-black'/>
                <div>
                <p>Additional Condition of Service</p>
                <div className='grid grid-cols-3 gap-2 items-center'>
                <span>
                <IoMdCheckboxOutline />
                <IoMdCheckboxOutline />

                </span>
                    <span >
                        <p>21 days Easy Return</p>
                        <p>100% Assurance of Good Quality</p>
                    </span>
                   
                </div>
             </div>
          </div>
        </div>
    </Layout>
  )
}
