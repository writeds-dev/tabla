import Image from 'next/image';

const Awards = () => {
  return (
    <section className="py-1 text-center bg-gray-50">
      <p className="text-4xl font-bold mb-8 text-red-800">Recognized and Awarded by</p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center"
        aria-label="Awards and recognitions logos"
        role="list"
      >
        {["a-1.png", "a-2.png", "a-3.png", "a-4.png", "a-5.webp"].map((img, i) => (
          <div
            key={i}
            role="listitem"
            className="w-full h-32 sm:h-40 lg:h-56 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-[#7D0C0C] p-4"
          >
            <div className="flex justify-center items-center h-full rounded-lg">
              <Image
                src={`/award/${img}`}
                alt={`Tabla Restaurant Franchise Award ${i + 1}`}
                width={100}
                height={60}
                className="object-contain transition-all"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
