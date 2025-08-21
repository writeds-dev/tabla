import React from 'react';
const headings = [
  
  { title: 'Own Your Future', subtitle: 'Become a Tabla Franchisee Today' },
];

const InvestmentTags = () => {
  return (
    <div className="relative hidden sm:flex justify-center w-full">
      <div
        className="bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8 w-full max-w-sm md:absolute md:-bottom-12 md:left-1/2 md:-translate-x-1/2 transition duration-300 ease-in-out hover:shadow-lg"
        role="complementary"
      >
        {/* Title */}
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-2">
          <span className="rotate-heading">{headings[0].title}</span>
        </h4>

        {/* Divider */}
        <hr className="w-12 border-t-2 border-yellow-400 mx-auto mb-4" />

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
          <span className="rotate-heading">{headings[0].subtitle}</span>
        </p>
      </div>
    </div>
  );
};

export default InvestmentTags;
