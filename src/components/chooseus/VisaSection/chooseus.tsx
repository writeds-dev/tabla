import Image from 'next/image';
import Link from 'next/link';

export default function TablaFranchise() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left section (Content) */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-black leading-tight mb-4">
          Franchise with Tabla & Unlock your E2 Visa Path
          </h2>
          <p className="text-lg text-gray-900">
           Invest in more than a restaurant — invest in your future. Tabla offers a powerful platform for qualified investors to pursue the E2 Visa, helping you and your family build a life in the U.S. through a proven business model.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-red-800 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Explore Franchise Opportunities
            </Link>
          </div>
          <div className="mt-6 text-sm text-black">
            <p>Have Questions? <span className="text-red-800">Call +1 (689) 698-9212</span></p>
          </div>
        </div>

        {/* Right section (Image) */}
        <div className="relative">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/shared/flight.webp"  
              alt="most profitable  restaurant franchise"
              layout="fill"
              objectFit="cover"
              className="transform scale-105 transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
