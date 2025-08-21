import React from 'react';
import Image from 'next/image';
import {
  Search,
  Calendar,
  Settings,
  MapPin,
  Home,
  Users,
  Wallet,
  Target,
} from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Guest Friendliness',
    Icon: Search,
    desc: 'We prioritize our guests in our every action and decision.',
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    id: 2,
    title: 'Hospitality',
    Icon: Calendar,
    desc: 'We aim to welcome everyone with warmth, care, and respect.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    id: 3,
    title: 'Integrity',
    Icon: Settings,
    desc: 'We uphold ethical standards in all our operations.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  },
  {
    id: 4,
    title: 'Creative',
    Icon: MapPin,
    desc: 'Our talented kitchen staff strive to innovate and bring new flavors to the table.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-100',
  },
  {
    id: 5,
    title: 'Committed',
    Icon: Home,
    desc: 'We are committed to our mission, our guests, and our team.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-100',
  },
  {
    id: 6,
    title: 'Teamwork',
    Icon: Users,
    desc: 'Our team exhibits collaborative culture to achieve excellence together.',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    id: 7,
    title: 'Authenticity',
    Icon: Wallet,
    desc: 'We are always true to our roots and traditions.',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    id: 8,
    title: 'Eco Friendliness',
    Icon: Target,
    desc: 'We commit to environmental sustainability through eco-friendly practices.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
  },
];

const Values = () => {
  return (
    <section className="relative px-6 sm:px-10 lg:px-20  overflow-hidden">
      {/* Headline */}
      <h2 className="text-4xl lg:text-5xl text-center text-red-800 font-extrabold mb-12">
        Our Core Values
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12">
        {/* Left Side - Core Values Cards (4 Cards) */}
        <div className="lg:w-3/5 mb-8 lg:mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {cards.slice(0, 4).map(({ id, title, Icon, desc, color, bgColor }) => (
            <div
              key={id}
              role="listitem"
              aria-labelledby={`card-title-${id}`}
              aria-describedby={`card-desc-${id}`}
              className="relative bg-white rounded-2xl shadow-lg p-6 text-left border border-gray-100 
                         hover:shadow-xl transition-all duration-300 group 
                         focus-within:outline-4 focus-within:outline-offset-4 focus-within:outline-[#7D0C0C]"
              tabIndex={0} 
              aria-label={`Card for ${title} core value`} 
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full ${bgColor} ${color} shadow-md`}
                aria-hidden="true" 
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3
                id={`card-title-${id}`}
                className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight relative 
                           transition-all duration-300 group-hover:text-[#7D0C0C] group-hover:tracking-wider"
              >
                {title}
                <span
                  className="block w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"
                  aria-hidden="true"
                />
              </h3>

              {/* Description */}
              <p
                id={`card-desc-${id}`}
                className="text-base text-gray-700 leading-relaxed tracking-wide font-medium 
                           transition-colors duration-300 group-hover:text-[#7D0C0C] "
              >
                {desc}
              </p>

              {/* Hover Bar */}
              <div className="absolute bottom-0 left-6 w-0 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full transition-all duration-500 group-hover:w-1/2" />
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-2/5 mb-8 lg:mb-0 lg:ml-12">
          <Image
            src="/Home/Laknona.webp" 
            width={500}
            height={300}
            alt=" popullar restaurant franchise"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Second Card Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row lg:items-center gap-12">
        {/* Right Side - Image */}
        <div className="lg:w-2/5 mb-8 lg:mb-0 lg:mr-12">
          <Image
            src="/Home/Schamburg.webp" // Replace with your image path
            width={500}
            height={300}
            alt="restaurant franchise for sale"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg" // Increased height
          />
        </div>
        
        {/* Left Side - Core Values Cards (Remaining 4 Cards) */}
        <div className="lg:w-3/5 mb-8 lg:mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {cards.slice(4, 8).map(({ id, title, Icon, desc, color, bgColor }) => (
            <div
              key={id}
              role="listitem"
              aria-labelledby={`card-title-${id}`}
              aria-describedby={`card-desc-${id}`}
              className="relative bg-white rounded-2xl shadow-lg p-6 text-left border border-gray-100 
                         hover:shadow-xl transition-all duration-300 group 
                         focus-within:outline-4 focus-within:outline-offset-4 focus-within:outline-[#7D0C0C]"
              tabIndex={0} 
              aria-label={`Card for ${title} core value`} 
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full ${bgColor} ${color} shadow-md`}
                aria-hidden="true" 
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3
                id={`card-title-${id}`}
                className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight relative 
                           transition-all duration-300 group-hover:text-[#7D0C0C] group-hover:tracking-wider"
              >
                {title}
                <span
                  className="block w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"
                  aria-hidden="true"
                />
              </h3>

              {/* Description */}
              <p
                id={`card-desc-${id}`}
                className="text-base text-gray-700 leading-relaxed tracking-wide font-medium 
                           transition-colors duration-300 group-hover:text-[#7D0C0C] "
              >
                {desc}
              </p>

              {/* Hover Bar */}
              <div className="absolute bottom-0 left-6 w-0 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full transition-all duration-500 group-hover:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
