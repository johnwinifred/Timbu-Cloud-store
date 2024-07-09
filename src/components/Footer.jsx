import React from 'react'
import { Link } from 'react-router-dom';
import Boombox from '../assets/mp3footer.png';
import Phone12 from '../assets/iphone12.png';
import Headphone from '../assets/headphonefooter.png';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className=" text-black text-[20px] pt-20 font-[Inter]">
            <div className=" ">
                <div className='grid grid-cols-2 gap-4 px-12 items-center justify-center h-[200px] py-6' style={{ background: 'radial-gradient(circle, rgba(82,190,190,1) 9%, rgba(82,190,190,1) 9%, rgba(0,128,128,1) 75%)' }}>
                    {/* text */}
                    <div className='flex flex-col text-center'>
                        <p className='font-semibold text-[20px] lg:text-[36px] text-[#FFFFFF]'>30% <b className='font-semibold text-[#FE8A68]'>OFF</b> </p>
                        <p className='font-semibold text-[18px] lg:text-[24px] text-[#FFFFFF]'>Popular & Trending Products</p>
                    </div>
                    {/* image */}
                    <div className='relative '>
                        <img src={Phone12} alt="" className='absolute z-30 top-[-2.5em] left-[1.5em] lg:left-[5em]' />
                        <img src={Headphone} alt="" className='absolute lg:top-[-10em] top-[-6em] left-8 z-20' />
                        <img src={Boombox} alt="" className='absolute z-10 right-0 lg:top-[-9em] top-[-7em] w-1/2' />
                    </div>
                </div>

                <div className='flex flex-col gap-6 px-2 md:px-12 pt-12'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">
                        <div>
                            <h4 className="text-[18px] font-bold mb-10">Categories</h4>
                            <ul className='flex flex-col gap-4 text-[14px]'>
                                <li><Link to="/" className="hover:underline">Headphone</Link></li>
                                <li><Link to="/" className="hover:underline">Earphone</Link></li>
                                <li><Link to="/" className="hover:underline">Audio Player</Link></li>
                                <li><Link to="/" className="hover:underline">Speakers</Link></li>
                                <li><Link to="/" className="hover:underline">Accessories</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[18px] font-bold mb-10">Support</h4>
                            <ul className='flex flex-col gap-7 text-[14px]'>
                                <li><Link to="/" className="hover:underline">My Account</Link></li>
                                <li><Link to="/" className="hover:underline">Ticket Support</Link></li>
                                <li><Link to="/" className="hover:underline">FAQ</Link></li>
                                <li><Link to="/" className="hover:underline">Contact us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[18px] font-bold mb-10">Get in touch</h4>
                            <ul className='flex flex-col gap-7 text-[14px]'>
                                <span className='flex flex-row gap-2'>
                                    <IoLocationSharp className='text-[#F57051]' />
                                    <p>Ikorodu, Lagos Nigeria</p>
                                </span>
                                <span className='flex flex-row gap-2'>
                                    <MdEmail className='text-[#F57051]' />
                                    <p>support@hng11</p>
                                </span>
                                <span className='flex flex-row gap-2'>
                                    <FaPhoneVolume className='text-[#F57051]' />

                                    <p>(800) 4000-234</p>
                                </span>

                            </ul>
                            <div className="flex space-x-4 flex-row pt-4">
                                <Link to="#"><FaFacebookF /></Link>
                                <Link to="#"><FaInstagram /> </Link>
                                <Link to="#"><FaTwitter /></Link>
                                <Link to="#"><FaYoutube /></Link>

                            </div>
                        </div>



                        <div className="">
                            <h4 className="text-[18px]  mb-4">Subscribe to our newsletter for new products,
                                trends and offers.</h4>

                            <hr />
                            <div className='flex flex-row gap-1 pt-4'>
                            <input type="text" placeholder='Email' className='border-[#555555] rounded-full w-[10em] p-6 h-6'/>
                           <button className='flex flex-row items-center gap-1 rounded-2xl px-2 py-2'style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }} >
                            <p className='text-sm text-white'>SIGNUP</p>
                            <MdEmail className='text-white'/>

                 </button>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </footer>
    )
}
