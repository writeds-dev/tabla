import Image from 'next/image'; // Import Image component

const packages = [
  {
    title: 'Full-Service Dining',
    image: '/FineDine/Full-Dine.webp',
    description: 'Comfortable seating arrangement for in-house fine dining with seating for 90 to 150 guests.',
  },
  {
    title: 'Expansive Menu',
    image: '/FineDine/menu.webp',
    description: 'Indian, Chinese, and Thai cuisine with authentic flavors and fusion dishes.',
  },
  {
    title: 'Full Bar',
    image: '/FineDine/bar.webp',
    description: 'Enhance the dining experience with alcoholic (optional) and non-alcoholic beverages.',
  },
  {
    title: 'Events',
    image: '/FineDine/event.webp',
    description: 'Host special occasions and celebrations at your location.',
  },
];

export default function FinePackages() {
  return (
    <section className="bg-white text-gray-900 py-24 px-4 sm:px-8 md:px-20" aria-label="Fine Dining Packages">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Must <em className="italic font-serif text-black">experience</em> <span className="text-[#7D0C0C]">FineDine</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mt-3 rounded"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Indulge in our carefully crafted packages that promise captivating and transformative food adventures.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-100 transform hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-60 overflow-hidden">
                {/* Image component with Next.js fill prop */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image covers the area properly
                  className="group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#7D0C0C] group-hover:text-yellow-600 transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
