'use client'
import React from 'react'
import Button from '@/components/ui/button'
import { color } from 'framer-motion'
import HeroSection from '@/components/ui/hero'
import Banner from '@/components/ui/banner'

function digitalMarketing() {
  return (

<div>
<HeroSection
     title="Digital Marketing"
      imgurl="https://images.unsplash.com/photo-1614020661483-d2bb855eee1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text="Unlock your brand’s potential with our innovative digital marketing. Drive traffic, boost engagement, and achieve real results. Elevate now!" /> 
      

      {/* service section in digital marketing*/}
  
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto bg-slate-100">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Search Engingine Optimization</h1>
                <p className="leading-relaxed mb-3">Elevate your digital presence with our advanced SEO services. We offer tailored strategies including keyword research, on-page optimization, technical enhancements, and performance tracking to drive sustainable growth and visibility.</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Social Media Marketing</h1>
                <p className="leading-relaxed mb-3">Drive measurable results with our comprehensive SEM services. We create and manage targeted ad campaigns, optimize keywords, and leverage data-driven strategies to increase visibility, attract high-quality traffic, and maximize your ROI.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Google/Meta ads</h1>
                <p className="leading-relaxed mb-3">Elevate your brand’s visibility with tailored Google Ads and Meta Ads strategies. Our service delivers high-impact campaigns, targeted audience engagement, and continuous optimization to enhance lead generation and ROI.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Email Marketing</h1>
                <p className="leading-relaxed mb-3">Boost your business with our expert email marketing services! We craft targeted campaigns, engaging content, and personalized strategies that drive conversions, enhance customer loyalty, and grow your brand's presence.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Content Marketing</h1>
                <p className="leading-relaxed mb-3">
                Boost your brand's visibility with our expert content marketing services. We create engaging, high-quality content tailored to your audience, driving traffic, enhancing SEO, and growing your online presence.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">B2B Marketing</h1>
                <p className="leading-relaxed mb-3">Our B2B marketing services help businesses drive growth through targeted strategies, lead generation, and personalized campaigns. We focus on delivering measurable results to enhance brand visibility and customer engagement.</p>


              </div>
            </div>
          </div>
        </div>
        <div className='border-b-2'></div>
      </section>

    
  

   {/* banner section */}
   <Banner title="Drive Growth with Cutting-Edge Digital Marketing Services"
       text1="Boost your online presence with our tailored digital marketing strategies."
       text2="Expert SEO, PPC, and social media solutions."
       imgurl="https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>

  )
}

export default digitalMarketing
