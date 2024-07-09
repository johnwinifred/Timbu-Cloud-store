import React from 'react'
import Layout from '../components/Layout'
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { IoMdCheckboxOutline } from "react-icons/io";
import ShoppingCart from '../components/ShoppingCart';
// import ProductsData from '../components/Productcard'
export default function CartPage() {
  return (
    <Layout>
        <div className=' font-[Inter] grid grid-cols-1 lg:grid-cols-2'>
          {/* <div>

            <ShoppingCart/>
          </div> */}
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
