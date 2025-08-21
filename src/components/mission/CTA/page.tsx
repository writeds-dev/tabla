import React from 'react';
import Link from 'next/link';

const CalltoAction = () => {
  return (
    <>
      <section className="relative w-full h-screen  text-white">
        {/* Video Block */}
        <section
          className="relative w-full h-full overflow-hidden"
          aria-labelledby="video-heading"
          role="region"
        >
          {/* Hidden heading for screen readers */}
          <h2 id="video-heading" className="sr-only">
            Tabla Franchise Promotional Video
          </h2>

          <iframe
            src="https://player.vimeo.com/video/951267091?h=a3aa651a1a&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Tabla Franchise Promotional Video"
            aria-describedby="video-description"
            style={{ border: 'none' }}
          />

          <p id="video-description" className="sr-only">
            Promotional video about joining the Tabla franchise, autoplaying muted in loop.
          </p>
        </section>
      </section>

      {/* CTA Text Block After Video */}
      <section className="relative py-16 bg-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7D0C0C] mb-6">
            Join the <span className="font-bold">Tabla</span> <span>Franchise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            Be part of a growing brand that&apos;s redefining Indian dining across the
            country. Partner with us and bring Tabla to your city.
          </p>

          {/* Call to Action Button */}
          <Link
            href="/contact"
            className="inline-block bg-[#7D0C0C] text-white px-8 py-4 rounded-full font-semibold text-xl shadow-lg hover:bg-red-800 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            aria-label="Become a partner in Tabla franchise"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
};

export default CalltoAction;
