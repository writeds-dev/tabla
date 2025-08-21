import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section
      className="relative py-20 md:py-28 px-2 sm:px-6 text-white font-sans overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ background: 'linear-gradient(120deg, #fff 60%, #FBE8E8 100%)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-extrabold leading-tight mb-6 tracking-tight"
        >
          Build Your Future with{' '}
          <span className="text-red-800">Tabla Franchise</span>
        </h2>

        <p className="text-base xs:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-black">
          Partner with a leading Indian fine-dining franchise. Get access to a proven business
          model, strong brand identity, and complete operational support to grow your restaurant
          business with confidence.
        </p>

        {/* Responsive Grid of Benefits */}
        <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-6 
          md:gap-8 
          max-w-6xl mx-auto mb-12
        ">
          {[
            'Comprehensive training & operational support',
            'Chef-independent, standardized menu',
            'Strong brand & marketing assistance',
            'Proven model with multi-state success',
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="
                flex flex-col items-center text-center gap-3 
                bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]
                border border-gray-200
                rounded-2xl shadow-md md:shadow-xl hover:shadow-2xl 
                p-6 sm:p-7 md:p-8 transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:scale-[1.025]
                min-h-[150px] xs:min-h-[160px] md:min-h-[180px]
              "
              role="listitem"
              aria-labelledby={`benefit-${idx}`}
            >
              <span className="flex items-center justify-center rounded-full bg-yellow-100 p-3 md:p-4 mb-2 shadow-sm">
                <FaCheckCircle
                  className="text-yellow-500 text-2xl md:text-3xl"
                  aria-hidden="true"
                />
              </span>
              <span
                id={`benefit-${idx}`}
                className="text-base sm:text-lg font-semibold text-gray-800"
              >
                {benefit}
              </span>
              <div className="h-1 w-8 bg-gradient-to-r from-[#8B0000] to-[#E50914] rounded-full mt-3 mx-auto" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B0000] to-[#E50914] text-white hover:scale-105 font-bold text-base sm:text-lg py-3 sm:py-4 px-7 sm:px-10 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          aria-label="Contact Tabla to become a franchise partner"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4-4m4 4l-4 4" />
          </svg>
          Become a Franchise Partner
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
