import { FC } from 'react'
import { Star, Heart, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

const Beliefs: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h2 className="text-4xl p-4 bg-white font-extrabold text-center text-gray-900">
          What Tabla Franchise Believes in
        </h2>
        <p className="text-xl text-center mt-4 text-black mb-12">
          Our core principles are designed to guide every franchisee <br /> on a journey of support, quality, innovation, and lasting impact.
        </p>

        {/* Main Content Section */}
        <div className="lg:flex items-center space-x-12 gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-96 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl shadow-2xl overflow-hidden relative">
            <Image
              src="/FineDine/Crousel/03.webp" 
              alt="Premimum restaurant franchise opportunities" 
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-8">
            <div>
              <div className="bg-gradient-to-r from-red-800 to-red-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
                <div className="flex items-center mb-6">
                  {/* Icon Section */}
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 shadow-lg mr-6">
                    <Users className="w-8 h-8" />
                  </div>
                  {/* Title Section */}
                  <h3 className="text-2xl font-semibold text-white">
                    Start Strong with Expert Support
                  </h3>
                </div>
                {/* Text Section */}
                <p className="text-md text-white leading-relaxed">
                  We walk with you every step of the way, from hands-on training to personal onsite support that ensures your success.
                </p>
              </div>
            </div>
    <div className="bg-white"> 
  <h3 className="text-2xl font-semibold p-5 text-red-900">A Premium Brand for Guests to Trust</h3>
  <p className="text-md p-5 text-black">
    Tabla is more than a name— it is a trusted symbol of excellence in modern Indian dining.
  </p>
</div>

          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="mb-4 text-4xl text-red-600">
              <Star />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">A Culinary Journey Like No Other</h3>
            <p className="mt-2 text-gray-600 text-md">
              Our diverse menu brings guests back again and again for unforgettable flavor journeys.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="mb-4 text-xl text-red-600">
              <Heart />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Create Moments that Matter</h3>
            <p className="mt-2 text-gray-600 text-md">
              You&apos;re not just serving food—you&apos;re crafting meaningful moments for every guest.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="mb-4 text-xl text-red-600">
              <TrendingUp />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">A Proven Path Plan for Growth</h3>
            <p className="mt-2 text-gray-600 text-md">
              Join a profitable model with a proven track record and thriving locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
