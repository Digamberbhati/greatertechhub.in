'use client'
import Link from 'next/link';
import React from 'react'
import { FloatingDockDemo } from '@/components/ui/FooterComponent';
import { DockDemo } from '@/components/ui/icons';
const Footer = () => {  
  return (
    <>
    <div className=' flex flex-col lg:flex-row justify-around pt-8 mt-4 items-start gap-8 px-12   py-3 tracking-tighter text-gray-200 '>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Contact Us</h1>
        <h4><b>Phone:</b> +91 9588160069</h4>
        <h4><b>Email:</b> info@greatertechhub.com</h4>
        
        <div className='icons flex gap-2 '>
          <div className='mt-5'>
           
   <DockDemo/>
    </div>
        </div>
      </div>
      <div className='flex gap-20 flex-col lg:flex-row  '>
        <div>
          <h2 className='text-xl font-bold pb-4'>Useful Links</h2>
          <Link href={"/"} > <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Home</h4></Link>
          <Link href={"/about"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- About us</h4></Link>
          <Link href={"/service"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Service</h4></Link>
          <Link href={"/contact"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Contact us</h4></Link>
          {/* <Link href={"/terms-of-service"}> <h4>- Terms of Services</h4></Link> */}
          {/* <Link href={"/privacy-policy"}> <h4>- Privacy Policy</h4></Link> */}
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Helpful Links</h2>
          <Link href={"/careers"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Career</h4></Link>
         
          <Link href={"/support"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Support</h4></Link>
          <Link href={"/partnership"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Partnership</h4></Link>
          <Link href={"/refer&earn"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Refer&Earn</h4></Link>
        </div>

        <div>
          <h2 className='text-xl font-bold pb-4'>Legal Links</h2>
          <Link href={"/terms-of-service"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Term of service</h4></Link>
          <Link href={"/privacy-policy"}> <h4 className='hover:text-gray-300 hover:scale-500 duration-150'>- Privacy policy</h4></Link>
        
         
        </div>
        <div>
          <h2 className='text-xl font-bold pb-4'>Location</h2>
          <h2 className='text-zinc-200 font-bold sm:text-[1.5vw] text-[1.9vh]'>India</h2>
         <h5 className='text-zinc-400'>3rd FLoor Krishna Palace 
          Ajronda Chowk  </h5>
          <h5 className='text-zinc-400'>Sector 20B  Faridabad ,Haryana 121001</h5>
          
          <h2 className='text-zinc-200 font-bold sm:text-[1.5vw]  text-[1.9vh]'>Australia</h2>
         <h5 className='text-zinc-400'>28 Woodley Cres, Glendenning NSW 2761, </h5>
        
          
         
        </div>
      </div>
    </div>
      <p className='text-center my-2 pb-4'>©2024 Copyright Greatertechhub. All Rights Reserved</p>
      </>
  )
}

export default Footer
