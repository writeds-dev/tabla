import { Soup, Pizza, Leaf } from 'lucide-react';
import Image from "next/image";

const menuFeatures = [
  {
    icon: <Soup className="w-8 h-8 text-[#FF6F61]" />,
    title: "Build Your Own Bowl",
    desc: "Chicken Tikka and other fresh ingredients to customize your perfect meal.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#FF6F61]" />,
    title: "Vegan & Gluten-Free Options",
    desc: "Delight in wholesome dishes like Gajar Halwa, catering to all dietary needs.",
  },
];

const menuFeatures2 = [
  {
    title: "Signature Pizza",
    desc: "Our Signature Pizza is a delightful blend of perfectly crisped crust, rich tomato sauce.",
    icon: <Pizza size={32} color="#FF6F61" />
  },
  {
    title: "Veggie Supreme",
    desc: "Packed with fresh vegetables and a medley of delicious toppings, this pizza is a favorite among those who love a healthy yet tasty bite.",
    icon: <Leaf size={32} color="#FF6F61" />  // For veggies
  },
];

const MenuHighlightSectionAlternateDesign = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        {/* Left Content Block */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-800 leading-tight mb-4">
            Explore Our Menu
          </h2>
          <div className="w-16 h-1 bg-black rounded-full mx-auto md:mx-0 mb-8"></div>

          <p className="text-black text-lg sm:text-xl leading-relaxed mb-10 text-center">
            Experience Tabla’s rich fusion of traditional Indian flavors and modern culinary creativity. Enjoy our signature dishes with a twist!
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-left">
            {menuFeatures.map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F61] focus:ring-offset-2"
                aria-labelledby={`feature-${i}`}
              >
                <div className="text-3xl text-[#FF6F61] w-16 h-16 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h4 id={`feature-${i}`} className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
                  <p className="text-md text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full sm:w-96 sm:h-96 flex-shrink-0 rounded-full shadow-2xl overflow-visible">
          {/* Decorative circle around the image */}
          <div className="absolute inset-0 rounded-full border-4 border-[#FF6F61] opacity-40 z-0"></div>

          {/* Burger Image */}
          <Image
            src="/SVG/burger.webp"
            alt=" fast casual franchise"
            width={500}
            height={500}
            className="object-cover z-10"
            priority
          />

          {/* Floating Decorative Image 1 */}
          <div className="absolute top-2 left-[-15px] w-16 h-16 z-20">
            <Image
              src="/shared/2pizza.webp"
              alt=""
              width={64}
              height={64}
              className="object-contain transform rotate-45"
            />
          </div>

          {/* Floating Decorative Image 2 */}
          <div className="absolute top-10 right-[-20px] w-12 h-12 z-20">
            <Image
              src="/SVG/Pasta.png"
              alt=""
              width={48}
              height={48}
              className="object-contain transform rotate-45"
            />
          </div>

          {/* Floating Decorative Image 3 */}
          <div className="absolute bottom-4 left-[-20px] w-14 h-14 z-20">
            <Image
              src="/SVG/f-1.png"
              alt=""
              width={56}
              height={56}
              className="object-contain transform rotate-45"
            />
          </div>

          {/* Floating Decorative Image 4 */}
          <div className="absolute bottom-2 right-[-25px] w-16 h-16 z-20">
            <Image
              src="/SVG/f-2.png"
              alt=""
              width={64}
              height={64}
              className="object-contain transform rotate-45"
            />
          </div>
        </div>

      </div>

      {/* Additional Content Block (Image before Content) */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24 mt-20">
        {/* Image Section (Left) */}
        <div className="relative w-full sm:w-96 sm:h-96 flex-shrink-0 rounded-xl overflow-hidden mb-16 md:mb-0">
          <Image
            src="/SVG/p-3.png"
            alt="fast casual resturant franchise"
            width={600}
            height={600}
            className="object-cover"
            priority
          />

          {/* Additional Decorative Image (Optional) */}
          <div className="absolute bottom-4 right-4 z-10">
            <Image
              src="/SVG/f-4.png"
              alt=""
              width={100}
              height={100}
              className="object-contain opacity-50"
            />
          </div>
          <div className="absolute top-0 right-4 z-10">
            <Image
              src="/SVG/f-3.png"
              alt=""
              width={100}
              height={100}
              className="object-contain opacity-50"
            />
          </div>
        </div>

        {/* Content Block (Right) */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-800 leading-tight mb-4">
            Explore Our Taste
          </h2>
          <div className="w-16 h-1 bg-black rounded-full mx-auto md:mx-0 mb-8"></div>

          <p className="text-black text-lg sm:text-xl leading-relaxed mb-10">
            Experience Tabla’s fusion of fast casual dining and gourmet flavors. Our pizzas are crafted with the finest ingredients, delivering both classic and innovative tastes with every slice.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-left">
            {menuFeatures2.map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F61] focus:ring-offset-2"
                aria-labelledby={`feature2-${i}`}
              >
                <div className="text-3xl text-[#FF6F61] w-16 h-16 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h4 id={`feature2-${i}`} className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
                  <p className="text-md text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuHighlightSectionAlternateDesign;
