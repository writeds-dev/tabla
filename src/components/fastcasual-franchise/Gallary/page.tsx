import Image from 'next/image';

const packages = [
  { image: '/FastCasual/fc-1.webp' },
  { image: '/FastCasual/fc-2.webp' },
  { image: '/FastCasual/fc-3.webp' },
  { image: '/FastCasual/fc-4.webp' },
  { image: '/FastCasual/fc-5.webp' },
  { image: '/FastCasual/fc-6.webp' },
  { image: '/Invest/i-6.jpg' },
];

const Gallery = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-4 sm:px-8 md:px-20" aria-label="Image Gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Must <em className="italic font-serif text-black">experience</em> <span className="text-[#7D0C0C]">FastCasual</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mt-3 rounded"></div>
          </div>
         <p className="text-black text-lg max-w-md leading-relaxed">
  Discover a curated selection of our best fast casual experiences, showcasing delicious dishes and vibrant moments. Dive into a world of flavor and ambiance through this visual journey.
</p>

        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] max-w-[300px] group overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-100 transform hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover p-1 group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
