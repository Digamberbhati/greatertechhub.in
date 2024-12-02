"use client";
import React, { Component } from "react";
import ServicePage from "@/app/service/page";
import Aboutpage from "@/app/about2/page";
import ClientPage from "@/app/client/page";
import  {ImagesSlider}  from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { OtherActivities } from "@/components/ui/otherActivities";
import Link from "next/link";
import InfiniteMovingCardsDemo from "@/app/review/page";


export default function Home() {
const images = [
   
    "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  
  ];   
  const words = [
    {
      text: "Tech",
    },

    {
      text: "Solutions",
    },

    {
      text: "for ",
    },
    
    {
      text: "Tomorrow’s",
    },
   
    {
      text: "Success.",
      className: "text-blue-500 dark:text-blue-600",
    },
  ];

 
  return (  
    <div className="z-[100]">

<ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-l md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-0">
        <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-300 dark:text-neutral-100 text-base  mb-10">
      Smart Tech, Bright Futures
      </p>
      <TextGenerateEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {<button  className="w-40 h-10 rounded-xl bg-custom-black border dark:border-white border-transparent duration-300 text-neutral-300 text-sm hover:bg-transparent hover:text-white">
        <Link href="/contact">Join-Us</Link>
        </button>
       }
      </div>
    </div>
        
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
      <div>
      <section className="overflow-hidden bg-custom-  black py-8 sm:py-16 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-0">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-300 sm:text-4xl pl-10 pt-0">Our expertise</p>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">We've built an API that allows you to scale your podcast
            production workflow.
          </p> */}

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-300 lg:max-w-none px-1">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-100">
                      Cutting-Edge Technology:
                    </dt>

                    <dd className="inline"> We use the latest technologies to provide innovative and efficient IT solutions.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-100">

                      Proven Track Record:
                    </dt>
                    <dd className="inline"> Our successful projects and satisfied clients showcase our reliability.</dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-100">
                      Comprehensive Support: </dt>

                    <dd className="inline">We tailor solutions to your needs and offer exceptional support..


                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-100">
                      Customized Solutions: </dt>

                    <dd className="inline">Personalized IT strategies with customized solutions for your business success.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-100">
                      Expert Team:</dt>

                    <dd className="inline"> Our team comprises seasoned professionals with extensive experience in various IT fields, ensuring high-quality service and expert guidance.


                    </dd>
                  </div>
                </dl>

              </div>

            </div><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="1280" height="720px" />
          </div>
        </div>
      </section>
      </div>
      <ServicePage/>
      <ClientPage/>
      <OtherActivities/>
      
      <InfiniteMovingCardsDemo/>
     
    


    <div
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061993.jpg?t=st=1725272293~exp=1725275893~hmac=afbcdf3ae77ec5b8a0aeee5b99fd85ed7a767474de07c7e272e4b2100b40997b&w=900')", backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-custom-black opacity-50"></div>
      {/* Overlay */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us Today!</h2>
          <p className="mb-6">Get exclusive access to our latest updates and offers.</p>
          <a
            href="/contact"
            className="bg-gray-800 hover:bg-transparent text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  
    </div>
  );


  };
 

 