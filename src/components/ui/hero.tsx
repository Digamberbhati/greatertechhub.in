'use client'
// Import the Image component from Next.js
import Image from 'next/image';

export default function HeroSection(props:any) {
  return (
    <div className="relative h-screen w-full flex items-center justify-start text-left bg-cover bg-center">
      {/* Background Image */}
      <Image 
        src={props.imgurl}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-20"></div>

      {/* Main Content */}
      <main className="px-10 lg:px-24 z-10">
        <div className="text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
            {props.title}{" "}
            <span className="text-indigo-600">Service</span>
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
           {props.text}
          </p>
          {/* <div className="mt-5 sm:mt-8 sm:flex justify-start">
            <div className="rounded-md shadow">
              <a
                href="contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
