import React from 'react';
import Headset from '../assets/headset.png';
import Laptop from '../assets/laptopHerosection.png';
import { BiShoppingBag } from "react-icons/bi";
import { Link } from 'react-router-dom';
// import Input from './Reuseables/CustomInput';


export default function HeroSection() {
    return (
        <div className='font-[Inter] flex flex-col md:flex-row items-center justify-center gap-6 rounded-lg w-full h-fit lg:h-[498px] py-10 '  style={{ background: 'radial-gradient(circle, rgba(82,190,190,1) 9%, rgba(82,190,190,1) 9%, rgba(0,128,128,1) 75%)' }} >
            <div className='flex flex-col items-center lg:items-start mx-12 lg:pl-6 lg:w-2/3 w-full text-white gap-10'>
                <div className='flex flex-col items-center md:items-start px-6  pt-8'>
                    
                    <p className='text-[10px] md:text-[16px] pb-6'>Exclusive Product </p>
                    <h1 className='font-semibold text-2xl md:text-4xl pb-4'>Discover the Future of Technology</h1>
                    <p className='  text-[10px] md:text-[16px]'>At GadgetHub, we bring you the latest and greatest in tech. Whether you're looking for a powerful laptop, the newest smartphone, or essential accessories to complement your devices, we've got you covered.</p>
                </div>
                <Link to={'/products'}>
                <button className='flex flex-row items-center gap-2 rounded-2xl px-4 py-2'style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }} >
                <BiShoppingBag />
                <p>Shop Now!</p>
                </button>
                </Link>
    
            </div>
            {/* image side */}
            <div className='  w-full md:w-2/3 flex flex-col relative'>
                
                <img src={Laptop} alt="" className=' absolute top-[-14em] right-[0] bg-fixed hidden md:block' />
                <img src={Headset} alt="" className='absolute z-20 top-[-8em] bg-fixed hidden md:block' />
                <div className=' hidden md:block absolute z-30 top-[5em] left-[-4em] border  rounded-full text-center w-[100px] h-[98px] bg-[#FFFFFF] '>
                    <p className='text-[#555555] text-[14px] pt-6'>Only Price</p>
                    <p className='text-[#EF5F43] text-[24px]'>$299</p>
                </div>
            </div>
            
        </div>
    )
}
