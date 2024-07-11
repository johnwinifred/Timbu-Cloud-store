import React from 'react'
import Layout from '../components/Layout'
import Iphone from '../assets/iphone12.png'
import Earphone from '../assets/earphone.png'
import Smartwatch from '../assets/smartwatch2.png'
import Imagebg from '../assets/imagebg.png'
import { IoIosSearch } from "react-icons/io";
import Products from '../components/Products'

function ProductListPage({ productsInCart=[], setCartVisible}) {
    

  return (
    

    <Layout>
        <div className="font-[Inter] bg-red-500 text-white">
            
        <HeroSections />
            
        </div>
        <div className='flex flex-col items-center p-12 '>
            <span className='flex flex-row items-center px-6 py-2 lg:w-2/3 border border-black rounded-2xl '>
            <IoIosSearch />
            <input type="text" className='bg-inherit w-fit' placeholder='Search Products, Categories, Brands' />
            </span>
        
        </div>
        <Products productsInCart={productsInCart} setCartVisible={setCartVisible}/>
        <Products productsInCart={productsInCart} setCartVisible={setCartVisible}/>
        <Products productsInCart={productsInCart} setCartVisible={setCartVisible} />
        
        <div>

        </div>

    </Layout>
    
  )
}
export default ProductListPage;

function HeroSections (){
    return (
        <div className='font-[Inter] flex flex-col pb-12  lg:flex-row items-center justify-center gap-6 rounded-lg w-full h-fit lg:h-[498px] py-10 '  style={{ background: ' radial-gradient(circle, rgba(245,245,245,1) 9%, rgba(245,245,245,1) 15%, rgba(217,217,217,0.9463087248322147) 93%)' }} >
            
                <div className='flex flex-col w-2/3 items-center md:items-start px-6 lg:px-12  pt-8'>
                    <p className='text-[28px] lg:text-[36px] text-[#008080]'>Enjoy the best deals on <span className='text-[#EF5F43]'>top-quality</span> gadgets. Your <span className='text-[#EF5F43]'>satisfaction</span> is our top priority.</p>
                </div>
                {/* image side */}
            <div className='hidden lg:block md:w-2/3 relative'>
                
                <img src={Smartwatch} alt="" className=' absolute z-40 top-[4em] left-[12em]  bg-fixed hidden lg:block' />
                <img  src={Earphone} className='absolute z-20 top-[6em] left-[3em] bg-fixed hidden lg:block' />
                <img src={Iphone} alt="" className='absolute top-[-6em] left-[8em] z-30 w-1/2' />
                <img src={Imagebg} alt="" className='absolute top-[-10em]' />
            </div>
            
        </div>
    
    )

}
