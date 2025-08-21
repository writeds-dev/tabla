import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div>
      {/* Full-Screen Video Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/FineDine/bar.webp')" }}
        aria-label="Call to Action - Franchise Video"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5f0f0f]/80 backdrop-blur-sm" aria-hidden="true" />

        {/* Full Screen Video */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/V3cKLFpBamI?si=ff-XDlYfZuHOGbzF"
                title="YouTube video player showcasing Tabla franchise"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
                aria-describedby="video-description"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text Section Below Video */}
      <div className="mt-10 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left section (Content) */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Become a Part of the Tabla Franchise
            </h2>
            <p className="text-lg text-black">
              Join a global network of successful franchises. With Tabla&apos;s proven model,
              you&apos;ll be supported every step of the way to open your own franchise location.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-red-800 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                aria-label="Explore franchise opportunities"
              >
                Explore Franchise Opportunities
              </Link>
            </div>
            <div className="mt-6 text-md text-black">
              <p>Have Questions? <span className="text-red-500">Call +1 (689) 698-9212</span></p>
            </div>
          </div>

          {/* Right section (Image) */}
          <div className="relative">
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/FastCasual/fastcasual-1.webp"
                alt=" fast food franchise"
                layout="fill"
                objectFit="cover"
                className="transform scale-105 transition duration-500 ease-in-out hover:scale-110"
                priority
                aria-labelledby="franchise-location"
              />
              <div className="absolute top-1/2 left-4/5 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white p-2 rounded-lg shadow-lg">
                <Image
                  src="/FastCasual/fastcasual-11.webp"
                  alt=" fast casual restaurant franchise"
                  layout="intrinsic"
                  width={420}
                  height={340}
                  className="object-cover rounded-md"
                  aria-labelledby="image-franchise-location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
