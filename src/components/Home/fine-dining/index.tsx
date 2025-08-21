import React from 'react';
import Image from 'next/image';
import { FiBookOpen, FiMapPin } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
  "Brand Recognition",
  "Marketing Power",
  "Networking and Community",
];

const FineDiningSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden" aria-labelledby="fast-casual-franchise-heading">
      <h2 id="fast-casual-franchise-heading" className="text-4xl text-center lg:text-5xl font-extrabold text-[#7A1515] leading-tight mb-4">
        Fine Dining <span className="text-black">Franchise</span>
      </h2>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-20 w-24 sm:w-36 lg:w-44 opacity-30 rotate-[12deg] z-0 pointer-events-none">
        <Image src="/SVG/2.png" alt="" width={244} height={244} />
      </div>
      <div className="absolute top-12 right-6 w-20 sm:w-28 md:w-36 lg:w-48 opacity-25 z-0 pointer-events-none hidden sm:block">
        <Image src="/SVG/f-2.png" alt="" width={200} height={200} />
      </div>
    
      {/* Flex Layout for Image Left + Content Right */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Content Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center">
          <p className="text-xl sm:text-2xl font-serif text-gray-800 mb-8">
            Leading Indian Restaurant & Catering Franchise Brand Since 2008
          </p>

          {/* Pre-Opening Support */}
          <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-10 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-green-800 mb-6">
              Pre-Opening Support & Training
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition" role="listitem">
                <FiBookOpen className="text-orange-600 text-2xl mt-1" aria-hidden="true" />
                <p className="text-gray-800 text-base sm:text-lg">
                  Join us for <strong>3 weeks</strong> of comprehensive training covering operations, team setup, and guest service.
                </p>
              </li>
              <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition" role="listitem">
                <FiMapPin className="text-orange-700 text-2xl mt-1" aria-hidden="true" />
                <p className="text-gray-800 text-base sm:text-lg">
                  Receive full onsite support during your <strong>restaurant launch</strong> for a seamless opening.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Left */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-tl-[200px] lg:rounded-tl-[200px] overflow-hidden shadow-xl">
          <Image src="/FineDine/Crousel/03.webp" alt="Food Franchise Opportunities" layout="fill" className="object-cover" priority />
        </div>
      </div>

      {/* Reasons to Own a Franchise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
          Reasons You Should Own a Franchise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300"
            >
              <FaCheckCircle className="text-green-600 text-2xl" aria-hidden="true" />
              <p className="text-lg font-semibold text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['/FineDine/Full-Dine.webp', '/FineDine/fd-4.jpg', '/FineDine/fd-2.jpg', '/FineDine/fd-3.jpg'].map((src, index) => (
            <div key={index} className="relative w-full aspect-square overflow-hidden shadow hover:shadow-md transition">
              <Image src={src} alt={`Indian food Franchise`} layout="fill" className="object-cover h-64 w-64" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FineDiningSection;
