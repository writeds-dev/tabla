import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Investment = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#FFF8F0] to-[#FDFDFD] py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#7D0C0C] leading-tight">
                Premium Franchise. Accessible Investment.
              </h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Tabla&apos;s fast casual franchise model is built for success — with competitive startup costs, operational simplicity, and powerful brand recognition.
              </p>
            </div>

            {/* VALUE BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl border border-yellow-200 p-5 shadow-md">
                <h4 className="text-xl font-bold text-[#7D0C0C] mb-2">Investment Range</h4>
                <p className="text-gray-800 text-base leading-snug">
                  <strong>$185K - $400K</strong><br /> Turnkey setup with premium value.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-yellow-200 p-5 shadow-md">
                <h4 className="text-xl font-bold text-[#7D0C0C] mb-2">Franchise Fee</h4>
                <p className="text-gray-800 text-base leading-snug">
                  <strong>$36K</strong> +<br /> 2% Brand Fund & 6% Royalty
                </p>
              </div>
            </div>

            {/* ADDITIONAL INFO */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              You’ll receive full operational training, marketing tools, vendor support, and a chef-independent system — designed for entrepreneurs, not just chefs.
            </p>
          </div>

          {/* RIGHT: CALL TO ACTION */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 space-y-6">
            <h3 className="text-2xl font-bold text-[#7D0C0C]">
              Join the Fastest Growing Indian Franchise in the USA
            </h3>
            <p className="text-gray-700 leading-relaxed">
              With multiple thriving locations, two franchise models, and a legacy of quality since 2008 — Tabla is the partner you’ve been looking for.
            </p>
            <ul className="space-y-4 text-gray-800 text-base list-inside list-disc">
              <li>No chef required</li>
              <li>Available across the USA</li>
              <li>Full training & marketing support</li>
              <li>Proven, scalable concept</li>
            </ul>
            <Link href="/contact">
              <button
                className="w-full bg-[#7D0C0C] cursor-pointer hover:bg-[#950F0F] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
              >
                Start Your Franchise Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Investment;
