import React from 'react'
import Layout from '../../components/Layout';
import HeroSection from '../../components/Herosection';
import Headset from '../../assets/headset.png';
import Phone from '../../assets/phone.png';
import Mp3player from '../../assets/mp3player.png';
import Man from '../../assets/man-image.png';
import Woman from '../../assets/woman-image.png';
import {Link} from 'react-router-dom'
import Products from '../../components/Products'
// import ProductCard from '../../components/Productcard';

 function Homepage({ productsInCart=[], setCartVisible}) {
  return (
    <Layout>
        <div className="font-[Inter] bg-[#F6F5F5] text-white">
          <div>
            <HeroSection/>
          </div>
          <div className='flex flex-col p-12 md:flex-row gap-6 items-center'>
            <div className='flex flex-col items-center justify-center text-justify-start lg:p-2 p-6 w-fit lg:w-[384px] lg:h-[390px] bg-[#F57051] rounded-[25px]'>
              <img src={Headset} alt="headset-image" />
              <p className='font-bold text-[16px] lg:text-[16px]'>Enhance your tech experience with accessories like headphones</p>
            </div>
            <div className='flex flex-col items-center justify-center text-justify-start lg:p-2 p-6 w-fit lg:w-[384px] lg:h-[390px] bg-[#008080] rounded-[25px]'>
              <img src={Mp3player} alt="headset-image" />
              <p className='font-bold text-[16px] lg:text-[16px]'>We offer accessories from trusted brands known for their reliability and performance.</p>
            </div>
            <div className='flex flex-col items-center justify-center text-justify-start lg:p-2 p-6 w-fit lg:w-[384px] lg:h-[390px]  bg-[#555555] rounded-[25px]'>
              <img src={Phone} alt="headset-image" />
              <p className='font-bold text-[16px] lg:text-[16px]'>Whether you prefer iOS, Android, we offer a wide selection to meet your preferences.</p>
            </div>

          </div>

          {/* product display */}
          <div className='flex items-center flex-col'>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-[16px] lg:text-[20px] text-[#008080]'>Most Popular</h2>
              <p className='font-bold text-[20px] lg:text-[36px] text-[#EF5F43]'>Trending Products</p>
            </div>

            <div>
              < Products productsInCart={productsInCart} setCartVisible={setCartVisible}/>
            </div>
           <Link to={'/products'}> 
           <button className=' rounded-2xl px-4 py-2'style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }}>
              See More Products
            </button>
            </Link>
          </div>
          {/* aboutus */}
          <Link to={'/aboutus'}>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 p-12'>
              <div className='flex flex-row gap-4 w-1/3'>
              <img src={Woman} alt="" />
                <img src={Man} alt="" />

              </div>
              {/* text section */}
              <div >
                <h3 className='font-semibold text-[20px] lg:text-[30px] text-[#008080] pb-4'>Why Choose <br /> GadgetHub?</h3>
                <span className="flex flex-col gap-4 text-[#292929]">
                <p>Unmatched Selection We pride ourselves on offering an extensive range of products to meet all your tech needs. 
                </p>
                <p>Whether you're a student, professional, gamer, or tech enthusiast, GadgetHub has something for everyone.</p>
                </span>

                <div className='flex items-end flex-col pt-4'>
                <button className=' rounded-2xl px-4 py-2'style={{ background: 'linear-gradient(to left, #FE8A68 0%, #EF5F43 100%)' }} >
                Learn More
                </button>
                
                </div>
                
              </div>
            </div>
        
          </Link>

        </div>
    </Layout>
  )
}
export default Homepage;