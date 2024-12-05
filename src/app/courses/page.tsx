import React from 'react';
import Banner from '@/components/ui/banner'
import HeroSection from '@/components/ui/hero'
function Courses() {
  return (
    <div>
    {/* hero-section */}
   <HeroSection

   title=""
    imgurl="https://images.unsplash.com/photo-1641931186542-a1d713124e3f?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    text="
Emphasize how your software solutions are designed to seamlessly integrate with tax and insurance processes, making it easier for businesses to manage their financial and compliance needs." /> 
      
      {/* service we provide section */}
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Compliance Tracking:</h1>
              <p className="leading-relaxed mb-3"> The software automatically tracks and updates tax regulations and insurance requirements, ensuring that businesses always remain compliant with the latest laws. This reduces the risk of costly errors and penalties and simplifies the process of keeping up with changing regulations.

</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Integrated Reporting and Documentation:</h1>
              <p className="leading-relaxed mb-3">The solutions provide integrated reporting tools that compile all necessary tax documents and insurance paperwork in one place. This feature helps businesses easily generate, file, and store reports, reducing the time spent on administrative tasks and ensuring that all records are accurate and readily available for audits or reviews.</p>


            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Streamlined Data Synchronization:</h1>
              <p className="leading-relaxed mb-3">
              The software integrates seamlessly with existing accounting and payroll systems, automatically syncing data related to taxes and insurance. This reduces manual data entry, minimizes errors, and ensures that all financial records are up-to-date, providing a comprehensive overview of a business’s financial health and compliance status.</p>


            </div>
          </div>
        </div>
      </div>
    </section>


      {/* banner section */}
     <Banner title="Maximize Savings with Expert Tax & Insurance"
     text1="Expert tax and insurance services designed to"
     text2="  maximize savings and protect your assets. Trust us for personalized, reliable solutions."
     imgurl="https://img.freepik.com/free-photo/income-tax-return-deduction-refund-concept_53876-134000.jpg?t=st=1725013365~exp=1725016965~hmac=fcfac579e96c05c764a770b9e601c9622e6c04ecc15140e91473827ea9833eaa&w=826"/>


    
  </div>
  );
}

export default Courses;
