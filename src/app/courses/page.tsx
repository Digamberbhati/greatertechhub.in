import React from 'react';

function Courses() {
  return (
    <div className="relative h-screen w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)' }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <main className="px-8 sm:px-24 z-10 sm:w-2/3">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Enter Your <span className="text-indigo-600">Headline</span>
        </h2>
        <p className="mt-3 sm:mt-5 text-lg font-light text-white">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        </p>
        <div className="mt-5 sm:mt-8 flex flex-wrap gap-4">
          <a href="#" className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500">Get started</a>
          <a href="#" className="px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50">Contact</a>
        </div>
      </main>

      <div className="z-10 flex sm:flex-col mt-5 sm:mt-0">
        <div className="flex items-center m-5 text-white">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
          <span>1<sup>Jan</sup> August</span>
        </div>
        <div className="flex items-center m-5 text-white">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
          <span>24*6</span>
        </div>
        <div className="flex items-center m-5 text-white">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
          <span>Faridabad</span>
        </div>
      </div>
    </div>
  );
}

export default Courses;
