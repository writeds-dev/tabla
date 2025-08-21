import Image from 'next/image';
import Link from 'next/link';
import {
  FaUtensils,
  FaPepperHot,
  FaStar,
  FaStoreAlt,
  FaHandsHelping,
  FaChartLine,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaUtensils className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Chef-Independent Operations',
    desc: 'Simplified, standardized recipes ensure consistent quality without relying on a head chef.',
    image: '/Mission/chef2.webp',
  },
  {
    icon: <FaPepperHot className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Authentic Indian Cuisine',
    desc: 'A menu crafted with genuine Indian spices and flavors, offering a true taste of India.',
    image: '/Mission/casual.webp',
  },
  {
    icon: <FaStar className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Established Brand',
    desc: 'A trusted name in Indian cuisine with a track record of successful locations.',
    image: '/Mission/build2.webp',
  },
  {
    icon: <FaStoreAlt className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Diverse Ownership Models',
    desc: 'Choose between full-service Fine Dining or Fast Casual to match your market and vision.',
    image: '/Mission/3.webp',
  },
  {
    icon: <FaHandsHelping className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Comprehensive Support System',
    desc: 'Assistance in training, operations, marketing, and management for your success.',
    image: '/Investment/support.webp',
  },
  {
    icon: <FaChartLine className="text-red-500 text-3xl mb-4" aria-hidden="true" />,
    title: 'Proven Business Model',
    desc: 'Proven success with restaurants operating in Florida, Texas, Chicago, and expanding to additional locations soon.',
    image: '/About/map.png',
  },
];

const Feature = () => {
  return (
    <section
      className="py-20 px-6 "
      aria-labelledby="why-choose-tabla-heading"
    >
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        <h2
          id="why-choose-tabla-heading"
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-snug relative inline-block"
        >
          Experience the <span className="text-[#7D0C0C]">Tabla</span> Advantage
        </h2>
       <div className="bg-gradient-to-br from-[#FFF7F3] to-[#FFFDF9] border border-[#FDEDD9] rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-lg mt-10">
  <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed  text-center sm:text-left">
    Step into a legacy where 
    <span className="text-[#7D0C0C] font-bold"> flavor</span>, 
    <span className="text-[#7D0C0C] font-bold">culture</span>, and 
    <span className="text-[#7D0C0C] font-bold"> innovation </span> 
    converge — delivering an extraordinary franchise experience you won’t want to miss.
  </p>
</div>

      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        role="region"
        aria-labelledby="features-list"
      >
        {features.map((item, i) => (
          <article
            key={i}
            aria-labelledby={`feature-title-${i}`}
            aria-describedby={`feature-desc-${i}`}
            className="bg-white  shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
          >
            <div className="relative h-56">
              <Image
                src={item.image}
                alt={`${item.title} - Tabla Franchise`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                aria-describedby={`feature-desc-${i}`}
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-t-3xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3
                id={`feature-title-${i}`}
                className="text-2xl font-extrabold text-gray-900 mb-3 flex items-center gap-2"
              >
                {item.icon}
                {item.title}
              </h3>
              <p
                id={`feature-desc-${i}`}
                className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-wide mt-1 group-hover:text-gray-800 transition-colors duration-300"
              >
                {item.desc}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7D0C0C] hover:text-red-600 transition-colors"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Feature;
