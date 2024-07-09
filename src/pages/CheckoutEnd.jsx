import React from 'react'
import Layout from '../components/Layout'
import Woman from '../assets/Section.png'
 function CheckoutEnd() {
  return (
    <Layout>
        <div 
        className='font-[Inter]  flex flex-col lg:flex-row items-center justify-center gap-6 rounded-lg w-full h-fit lg:h-[498px] py-10 relative'  
          style={{ 
        backgroundImage: `url(${Woman}), radial-gradient(circle, rgba(245,245,245,1) 9%, rgba(217,217,217,1) 75%)`, 
        backgroundSize: 'cover, cover', 
        backgroundPosition: 'center, center' 
      }}>
           
            <p className='text-5xl text-white'>Contact Us</p>
        </div>
        <div className='flex flex-col items-center pt-12'>
           <div className='form pb-4'>
             <h1 className='text-2xl font-semibold text-[#202042] pb-12 '>Get in <span className='text-[#F57051]'>Touch</span> with us</h1>
             <form action="">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <span>
                        <p>Fullname</p>
                        <input type="text" placeholder='Enter fullname' className='border rounded-lg p-2' />
                    </span>
                    <span>
                        <p>Phonenumber</p>
                        <input type="text" placeholder='+234' className='border rounded-lg p-2' />
                    </span>
                    <span>
                        <p>EmailID</p>
                        <input type="text" placeholder='Enter your emailID' className='border rounded-lg p-2' />
                    </span>
                    <span>
                        <p>Company</p>
                        <input type="text" placeholder='Enter company name' className='border rounded-lg p-2' />
                    </span>
                </div>
                <div className='pb-4'>
                    <p>Description</p>
                    <input type="text" placeholder='Type here' className='w-full h-[100px] border rounded-lg'/>
                </div>
                <span className=''>
                    <button className='mr-4 border border-[#202042] rounded-md bg-[#ffffff] text-[#202042] py-2 px-4 hover:text-[#ffffff] hover:bg-[#202042]'>Clear</button>
                    <button className='border border-[#202042] rounded-md bg-[#ffffff] text-[#202042] py-2 px-4 hover:text-[#ffffff] hover:bg-[#202042]'>Submit</button>
                </span>
             </form>
           </div>
        </div>
    </Layout>
  )
}
export default CheckoutEnd;