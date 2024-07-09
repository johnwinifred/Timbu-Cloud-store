import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkoutform() {
  return (
    <form action="" >
      <div className='flex flex-col gap-4 w-full '>
        <span className='flex flex-col'>
          <p className='font-semibold'>Contact</p>
          <input type="text" placeholder='Email or mobile phone number' className='border px-12 py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>
          <span className='flex flex-row gap-2 '>
          <input type="checkbox" name="" id=""  />
          <p>Email me with news and offers</p>
          </span>
        </span>

        <span className='flex flex-col gap-4 '>
          <p className='font-semibold'>Delivery</p>
          <input type="text"  placeholder='Country/region'className='border px-12 py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>

          <span className='grid grid-cols-2 gap-2'>
            <input type="text" placeholder='firstname' className='border px-2 py-2 rounded-lg border-[#707070] hover:border-[#008080]' />
            <input type="text" placeholder='lastname' className='border px-2 py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>
          </span>
          <input type="text" placeholder='Address' className='border px-12 py-2 rounded-lg border-[#707070] hover:border-[#008080]' />
          <input type="text" placeholder='Apartment/suite (optional)' className='border px-12 py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>
          <span className='grid grid-cols-3 gap-4'>
            <input type="text" placeholder='City' className='border lg:w-[8em] py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>
          <input type="text" placeholder='State'className='border lg:w-[8em] py-2 rounded-lg border-[#707070] hover:border-[#008080]'/>
            <input type="text" name="" id="" placeholder='Postal Code'className=' py-2 border lg:w-[8em] rounded-lg border-[#707070] hover:border-[#008080]'/>
          </span>

          <span >
            <p className='font-semibold'>Payment</p>
            <p>All transactions are secure</p>
            <div className=''>
              <ul>
                <p><input type="checkbox" name="" id="" /> Cash on Delivery</p>
                <p><input type="checkbox" name="" id="" />Paypal payment</p>
                <p><input type="checkbox" name="" id="" /> Card payment</p>
                
              </ul>
            </div>
          </span>
          <span className='flex flex-col'>
            <p className='font-semibold'>Billing Address</p>
            <span className='flex flex-col border px-12 py-2 rounded-lg border-[#707070] hover:border-[#008080]'>
            <input type="text" placeholder='Enter billing address'/>
            </span>
          </span>
          <Link to={'/checkoutend'} >
          <button className='border bg-[#008080] px-6 py-2 '>
            Proceed To Checkout
          </button>
          </Link>
        </span>

      </div>
    </form>
  )
}
