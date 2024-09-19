"use client";
import React, { useEffect } from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";





const content = [
    {
      title: "Business Planning",
      description:
        "I'm here to help with any questions or guidance you need regarding business planning. What specific notice or query do you have related to Business Planning? Please feel free to ask, and I'll do my best to assist you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business Planning" className="h-full w-full object-cover object-center duration-100"/>
</div>

      ),
    },
    {
      title: "Financial Analaysis",
      description:
        "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbmFuY2lhbCUyMGFuYWx5c2lzfGVufDB8fDB8fHww" alt="Financial Analysis  " className="h-full w-full object-cover object-center duration-100"/>
</div>

      ),
    },
    {
      title: "Legal Advisory",
      description:
        "I'm here to assist you with any questions or guidance you need regarding legal advisory matters. What specific notice or query do you have related to Legal Advisory? Please feel free to ask, and I'll do my best to provide you with relevant information or suggestions",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3eWVyfGVufDB8fDB8fHww" alt="Leagel Advisory" className="h-full w-full object-cover object-center duration-100" />
        </div>
      ),
    },
    {
      title: "Market Challenges",
      description:
        "We provide market challenges analysis to help businesses identify and address the obstacles they face in their respective industries.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFya2V0JTIwY2hhbGxlbmdlfGVufDB8fDB8fHww" alt="Market Challenges" className="h-full w-full object-cover object-center duration-100" />
        </div>
      ),
    },
  ];

const Aboutpage = () => {

  

 
  return (

    
    <>

    
    <div className='py-32   mx-auto min-h-[60vh] z-0'>
        <div className="max-w-screen-xl mx-auto mt-20">

        <StickyScroll content={content} />
        </div>
    </div>
    </>
  )
}

export default Aboutpage
