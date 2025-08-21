import React from 'react'

const Vision = () => {
  return (
    <div>
         <section className="bg-gradient-to-b from-[#fff9ec] via-[#fffdfa] to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-8 border-[#F4D58D] pl-8 sm:pl-10 md:pl-12 space-y-8 bg-white rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 max-w-full min-w-0">
            <div className="absolute -top-6 sm:-top-7 left-8 bg-[#F4D58D] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#7f1d1d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Our Vision
            </h2>
            <div className="h-1 w-20 sm:w-24 md:w-28 bg-gradient-to-r from-[#F4D58D] via-[#f0c254] to-[#cba02e] rounded-full" />
            <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed font-light tracking-wide">
              To be the catalyst that propels the revolution of Indian food and provide a profitable enterprise for our franchises where they can maximize their ROI.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision