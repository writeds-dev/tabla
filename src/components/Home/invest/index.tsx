import Image from 'next/image';

// Define the InvestContent interface for type safety
export interface InvestContent {
  heading: string;
  subheading: string;
  paragraph: string;
  ctaText: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const Invest = ({
  heading,
  subheading,
  paragraph,
  ctaText,
  ctaHref,
  image,
}: InvestContent) => {
  return (
    <section
      className="relative py-16 sm:py-20 bg-white text-white overflow-hidden"
      aria-labelledby="invest-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-12">
        {/* Left Content */}
        <div className="space-y-8">
          <h2
            id="invest-heading"
            className="text-3xl sm:text-4xl ml-5 lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md text-center text-black md:text-left"
          >
            <span className="block">{heading}</span>
            <span className="block mt-2 text-black">{subheading}</span>
          </h2>

          <div className="bg-white/10 border border-white/20 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg transition hover:shadow-2xl">
            <p className="text-sm sm:text-base p-5 md:text-lg font-medium leading-relaxed tracking-wide text-white text-center md:text-left whitespace-pre-line bg-gray-800 rounded-lg">
              {paragraph}
            </p>
          </div>

          {/* Center the CTA Button */}
          <div className="flex justify-center mt-6">
            <a
              href={ctaHref}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-orange-300"
              aria-label={`Learn more about the Tabla investment opportunity: ${ctaText}`}
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md sm:max-w-lg mx-auto md:mx-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full rounded-xl"
            priority
            aria-describedby="invest-image-description"
          />

          {/* Description below the image */}
          <p className="text-black text-lg p-5 md:text-left mt-6 sm:mt-8">
            Both offering authentic Indian Fusion Cuisine curated for modern diners. Join Tabla to bring a top-tier culinary experience to your local market — with full support and brand power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invest;
