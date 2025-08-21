import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; 

export default function  Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-semibold text-[#111827] mb-6">
            Why Choose Tabla Fast Casual?
          </h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            At Tabla Fast Casual, we bring together the best of both worlds: high-quality food and a quick, convenient dining experience. Whether you&apos;re on-the-go or enjoying a relaxed meal with friends and family, our fast-casual model offers an elevated dining experience without the wait.
          </p>

          <ul className="space-y-6 text-lg text-gray-600 mb-6">
            <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md hover:bg-purple-50 transition-colors duration-300 focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
              <FaCheckCircle className="text-green-500 mr-4 mt-1 text-xl" />
              <div>
                <span className="font-semibold text-black">Fresh &amp; Flavorful:</span> 
                <p className='text-black'>Chef-driven menu with a modern twist on traditional recipes.</p>
              </div>
            </li>

            <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md hover:bg-purple-50 transition-colors duration-300 focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
              <FaCheckCircle className="text-green-500 mr-4 mt-1 text-xl" />
              <div>
                <span className="font-semibold text-black">Diverse Influence:</span> 
                <p className='text-black'>A menu that celebrates flavors from across India and beyond.</p>
              </div>
            </li>

            <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md hover:bg-purple-50 transition-colors duration-300 focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
              <FaCheckCircle className="text-green-500 mr-4 mt-1 text-xl" />
              <div>
                <span className="font-semibold text-black">Live Cooking Experience:</span> 
                <p className='text-black'>Guests enjoy watching their meals prepared in a vibrant, open kitchen.</p>
              </div>
            </li>

            <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md hover:bg-purple-50 transition-colors duration-300 focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
              <FaCheckCircle className="text-green-500 mr-4 mt-1 text-xl" />
              <div>
                <span className="font-semibold text-black">Efficient Model:</span> 
                <p className='text-black'>Streamlined operations with lower startup costs and high profitability potential.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section (Images) */}
        <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <Image 
              src="/SVG/fc-011.webp" 
              alt=" best fast casual franchise" 
              width={284} 
              height={246} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/SVG/fc-014.jpg" 
              alt="best food franchise to own " 
              width={284} 
              height={246} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/SVG/fc-013.jpg" 
              alt="fast food franchise" 
              width={284} 
              height={246} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/SVG/fc-012.jpg" 
              alt="best food franchise to own " 
              width={284} 
              height={246} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
