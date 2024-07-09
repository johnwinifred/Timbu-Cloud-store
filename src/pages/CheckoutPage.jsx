import React from 'react'
import Navbar from '../components/Navbar'
import Checkoutform from '../components/Checkoutform'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";



export default function CheckoutPage() {
  return (
    <div className='font-[Inter]'>
         <Navbar />
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 p-12'>
             <Checkoutform/>
             <div>
                <div className='bg-[#FFF6F3] p-6 w-fit '>
                    <p className='font-semibold text-md'>Order summary</p>
                    <div >
                        <span className='grid grid-cols-2'>
                            <p>Subtotal</p>
                            <p>#600, 000.00</p>
                        </span>
                        <span className='grid grid-cols-2'>
                            <p>Ground Shipping Change</p>
                            <p>#10,000.00</p>
                        </span>
                        <span className='grid grid-cols-2'>
                            <p>Estimated Tax (0.7%)</p>
                            <p> #4,200.00</p>
                        </span>
                         
                    </div>
                    <hr />
                    <span className='grid grid-cols-2 font-semibold'>
                    <p>Total (NGN)</p>
                    <p>#614,200.00</p>
                    </span>
                    <hr />
                </div>
                <div >
                    <p className='font-semibold pb-4'>Need some help?</p>
                    <div className='bg-[#008080] w-2/3 p-4 text-white'>
                        <span  className='flex flex-row gap-2 pb-2 items-center'>
                            <FaPhoneVolume/>
                            
                            <p>Call us 234 906 6666 234</p>
                        </span>
                        <span  className='flex flex-row gap-2 pb-2 items-center'>
                        <MdEmail />
                            <p>Leave us a message</p>
                        </span>
                        <span className='flex flex-row gap-2 pb-2 items-center'>
                        <IoChatbubbleEllipsesOutline />
                            <p>Shipping and Returns</p>
                        </span>
                        <span className='flex flex-row gap-2 pb-2 items-center'>
                        <IoChatbubbleEllipsesOutline />

                            <p>Live chat</p>
                        </span>
                    </div>
                </div>
             </div>
         </div>
         <footer className='bg-[#008080] p-4 max-w-full text-wrap'>
            <p className='text-[14px] text-white'>We protect your payment and personal information to ensure a safe and secure shopping experience, if the have question, please view our Privacy Statement</p>
         </footer>
    </div>
    
  )
}
