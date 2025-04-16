'use client'
import React from 'react'
import Banner from '@/components/ui/banner'
import HeroSection from '@/components/ui/hero'

function tax_insurance() {
  return (
    <div>
      {/* hero-section */}
      <HeroSection
        title="2D & 3D Animation & VFX Video Services"
        imgurl="https://images.unsplash.com/photo-1547194936-28214bd75193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="We bring stories to life with stunning 2D & 3D animation, cinematic VFX, and professional video production. From vlogs and web series to weddings and corporate events, our visual magic leaves a lasting impact."
      />

      {/* service we provide section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 2D Animation */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Engaging 2D Animation
                </h1>
                <p className="leading-relaxed mb-3">
                  Craft compelling stories with smooth and vibrant 2D animation. Perfect for explainer videos, intros, brand storytelling, and short films that demand a creative edge.
                </p>
              </div>
            </div>

            {/* 3D Animation */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  High-Quality 3D Animation
                </h1>
                <p className="leading-relaxed mb-3">
                  Build immersive experiences with realistic 3D animations. Great for product demos, architectural walkthroughs, medical visuals, or full 3D cinematic sequences.
                </p>
              </div>
            </div>

            {/* VFX Services */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  VFX for Weddings & Events
                </h1>
                <p className="leading-relaxed mb-3">
                  Add that cinematic flair to your event or wedding videos. With advanced visual effects, transitions, slow-mos, and CGI, we make memories unforgettable and visually magical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* banner section */}
      <Banner
        title="Create Magic With Animation & VFX"
        text1="From concept to final cut, our creative team delivers"
        text2="exceptional video content with top-tier animation and visual effects."
        imgurl="https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  )
}

export default tax_insurance