import Image from 'next/image';
import Link from 'next/link';

export default function TablaFranchise() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left section (Content) */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-black leading-tight mb-4">
            Become a Part of the Tabla Franchise
          </h2>
          <p className="text-lg text-gray-900">
            Join a global network of successful franchises. With Tabla&apos;s proven model, 
            you&apos;ll be supported every step of the way to open your own franchise location.
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
              src="/Home/ovideo.webp"  
              alt="Fine dining franchise USA"
              layout="fill"
              objectFit="cover"
              className="transform scale-105 transition duration-500 ease-in-out hover:scale-110"
            />
            <div className="absolute top-1/2 left-4/5 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white p-2 rounded-lg shadow-lg">
              <Image
                src="/FineDine/Crousel/05.webp"  
                alt="High-end restaurant franchise"
                layout="intrinsic"
                width={320}
                height={240}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
