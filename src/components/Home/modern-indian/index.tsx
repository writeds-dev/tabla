import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image";

import { FiBookOpen, FiMapPin } from 'react-icons/fi';

const benefits = [
  "Proven Business Model",
  "Access to Innovation",
];

export default function ModernIndian() {
  return (
    <section
      className="modern-indian-area bg-gradient-to-b from-[#F3F3F4] to-white pb-12 overflow-x-hidden font-sans"
      role="main"
      aria-label="Fast Casual Franchise and Commitment to Excellence"
    >
      {/* Top Section */}
      <section className="relative bg-white py-20 overflow-hidden" aria-labelledby="fast-casual-franchise-heading">
        <h2 id="fast-casual-franchise-heading" className="text-4xl text-center lg:text-5xl font-extrabold text-[#7A1515] leading-tight mb-4">
          Fast Casual <span className="text-black">Franchise</span>
        </h2>
        
        {/* Decorative Elements */}
        <Image src="/SVG/f-1.png" alt="" width={244} height={244} className="absolute top-0 left-20 w-24 sm:w-36 lg:w-44 opacity-30 rotate-[12deg] z-0 pointer-events-none" />
        <Image src="/SVG/f-2.png" alt="" width={200} height={200} className="absolute top-12 right-6 w-20 sm:w-28 md:w-36 lg:w-48 opacity-25 z-0 pointer-events-none hidden sm:block" />
        <Image src="/SVG/f-3.png" alt="" width={200} height={200} className="absolute bottom-10 mt-5 left-4 w-24 sm:w-32 md:w-40 lg:w-56 opacity-25 rotate-[10deg] z-0 pointer-events-none hidden sm:block" />

        {/* Flex Layout for Image Left + Content Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Left */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-tr-[200px] lg:rounded-tr-[300px] overflow-hidden shadow-xl">
            <Image src="/FastCasual/fortworth.jpeg" alt="Dining Setup with traditional Indian decor" fill className="object-cover" priority />
          </div>

          {/* Content Right */}
          <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center">
            <p className="text-xl sm:text-2xl font-serif text-gray-800 mb-8">
              Leading Indian Restaurant & Catering Franchise Brand Since 2008
            </p>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Reasons You Should Own a Franchise</h2>
               <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-10 mb-8">
                         <h3 className="text-md sm:text-xl font-extrabold text-green-800 mb-6">
As part of our pre-opening support, we provide onboarding and training to ensure you launch your franchise confidently and successfully.

                         </h3>
                         <ul className="space-y-5">
                           <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition" role="listitem">
                             <FiBookOpen className="text-orange-600 text-2xl mt-1" aria-hidden="true" />
                             <p className="text-gray-800 text-base sm:text-lg">
                               2 weeks of initial training to set you up for success. guest service.
                             </p>
                           </li>
                           <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition" role="listitem">
                             <FiMapPin className="text-orange-700 text-2xl mt-1" aria-hidden="true" />
                             <p className="text-gray-800 text-base sm:text-lg">
                              On-site support at your Tabla location as you prepare to open.
                             </p>
                           </li>
                         </ul>
                       </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((title, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-orange-600 text-2xl" aria-hidden="true"><FaCheckCircle /></div>
                    <div className="text-lg font-semibold text-gray-800">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['/SVG/fc-013.jpg', '/SVG/samosa-1.jpg', '/FastCasual/fc-6.webp', '/SVG/P-2.jpg'].map((src, index) => (
              <div key={index} className="relative w-full aspect-square overflow-hidden shadow hover:shadow-md transition">
                <Image src={src} alt={`fine dining restaurant franchise`} fill className="object-cover h-64 w-64" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <div className="commitment-area relative max-w-6xl mx-auto px-4 sm:px-6 py-12" aria-labelledby="commitment-heading">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative mb-10">
    {/* Heading with underline accent */}
    <h2
      id="commitment-heading"
      className="text-4xl xl:text-5xl text-red-800 font-extrabold text-center pb-4 leading-tight relative"
    >
      Our Commitment to{" "}
      <span className="text-black relative z-10">Excellence</span>
    </h2>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-700 rounded-full mt-4" aria-hidden="true" />
  </div>

  {/* Three Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 items-center">
    {/* Focus */}
    <div
      className="flex flex-col items-center"
      role="region"  
      aria-labelledby="focus-heading"  
    >
      <div className="w-16 h-16 mb-5">
        <Image
          src="https://www.tablafranchise.com/shared/focus.svg"
          alt="Focus icon representing the franchise's core objectives"
          width={64}
          height={64}
          className="mx-auto"
          aria-hidden="true"
        />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl">
        <h3 id="focus-heading" className="font-semibold text-red-800 text-2xl mb-6 border-b-4 border-red-800 pb-3">
          Our Focus
        </h3>
        <ul className="list-disc list-outside space-y-4 text-gray-800 text-lg pl-6">
          <li className="mb-2">Authentic & Fresh</li>
          <li className="mb-2">Consistent & Reliable</li>
          <li className="mb-2">Value for Money</li>
          <li className="mb-2">Memorable Experience</li>
        </ul>
      </div>
    </div>

    {/* Center Image */}
    <div
      className="flex justify-center flex-shrink-0"
      role="img"
      aria-label="Fine Dine customer image" 
    >
      <div className="max-w-[600px] min-w-[280px] h-[280px] shadow-2xl overflow-hidden">
        <Image
          src="/FastCasual/fastcasual-1.webp"
          alt="tabla restaurant franchise"
          width={280}
          height={280}
          className="object-cover w-full h-full comm-img"
          priority
        />
      </div>
    </div>

    {/* Core Values */}
    <div
      className="flex flex-col items-center"
      role="region"
      aria-labelledby="core-values-heading"
    >
      <div className="w-16 h-16 mb-5">
        <Image
          src="https://www.tablafranchise.com/shared/values.svg"
          alt="Core values icon"
          width={64}
          height={64}
          className="mx-auto"
          aria-hidden="true"
        />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl">
        <h3 id="core-values-heading" className="font-semibold text-red-800 text-2xl mb-6 border-b-4 border-red-800 pb-3">
          Core Values
        </h3>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-lg list-disc list-outside pl-6">
          {[
            "Guest Friendly",
            "Integrity",
            "Committed",
            "Authenticity",
            "Hospitality",
            "Creative",
            "Team Work",
            "Eco Friendly",
          ].map((item) => (
            <li key={item} className="whitespace-pre-line">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Row */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-5 items-center">
    {/* Left Image */}
    <div className="flex justify-center items-center" role="img" aria-label="Fine Dine plate image">
      <div className="max-w-[600px] min-w-[280px] h-[280px] shadow-2xl overflow-hidden">
        <Image
          src="/About/plate.webp"
          alt="Fine dining restaurant franchise"
          width={280}
          height={280}
          className="object-cover w-full h-full comm-img"
          priority
        />
      </div>
    </div>

    {/* Mission */}
    <div
      className="flex flex-col items-center mx-auto"
      role="region"
      aria-labelledby="mission-heading"
    >
      <div className="w-16 h-16 mb-5">
        <Image
          src="https://www.tablafranchise.com/shared/mission.svg"
          alt="Mission icon"
          width={64}
          height={64}
          className="mx-auto"
          aria-hidden="true"
        />
      </div>
      <h3 id="mission-heading" className="sr-only">Mission</h3> {/* Hidden for accessibility */}
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl"
        role="region"
        aria-labelledby="mission-heading"
      >
        <h3 className="font-semibold text-red-800 text-2xl mb-6 border-b-4 border-red-800 pb-3">
          Mission
        </h3>
        <p className="text-lg leading-relaxed text-black">
          Elevating Indian & South Asian Cuisines and creating convenient access
          in local communities.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center flex-shrink-0" role="img" aria-label="Fine Dine lemon image">
      <div className="max-w-[600px] min-w-[280px] h-[280px] shadow-2xl overflow-hidden">
        <Image
          src="/About/customer.webp"
          alt="affordable restaurant franchise"
          width={280}
          height={280}
          className="object-cover w-full h-full comm-img"
          priority
        />
      </div>
    </div>
  </div>
</div>


{/* Vision Section */}
    <div
        className="vision-area max-w-6xl mx-auto px-4 sm:px-6"
        aria-labelledby="vision-heading"
      >
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-5 rounded-md shadow-md">
          <h2
            id="vision-heading"
            className="flex items-center text-2xl font-bold text-yellow-800 mb-4 gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-yellow-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a7 7 0 00-7 7c0 3.866 3 6 3 6v3a1 1 0 001 1h6a1 1 0 001-1v-3s3-2.134 3-6a7 7 0 00-7-7z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
            </svg>
            Vision
          </h2>
         <p className="text-black leading-relaxed text-lg">
  To be the catalyst that propels the revolution of Indian food and provide a profitable enterprise for our franchises where they can maximize their ROI.
</p>

        </div>
      </div>
    </section>
  );
}
