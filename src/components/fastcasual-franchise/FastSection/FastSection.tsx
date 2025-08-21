import Image from "next/image";

export default function FastSection() {
  return (
    <div className=" bg-white mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-black">
          Fast <span className="h-1 w-1 text-red-800 underline">Casual</span> Dining
        </h2>
        <p className="mt-4 text-lg text-black max-w-3xl mx-auto">
          Enjoy handcrafted meals delivered fast, blending the speed of fast food with the comfort and quality of casual dining.
          Perfect for those who crave both convenience and flavor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
          <div className="mb-6">
            <Image
              src="/shared/FastCasual.webp"
              alt="fast casual resturant franchise"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg transform hover:scale-110 duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-black">Fast Casual Dining</h3>
          <p className="mt-2 text-black text-lg">
            Quick service with a relaxed sit-down atmosphere, offering fresh, flavorful dishes for every taste.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
          <div className="mb-6">
            <Image
              src="/FastCasual/menuu.webp"
              alt="fast casual franchise"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg transform hover:scale-110 duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-black">Focused Menu</h3>
          <p className="mt-2 text-black text-lg">
            High-quality Indian dishes with bold flavors, made using the finest ingredients and traditional recipes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
          <div className="mb-6">
            <Image
              src="/shared/lunch.webp"
              alt="fast casual resturant franchise"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg transform hover:scale-110 duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-black">Pre-Order Trays</h3>
          <p className="mt-2 text-black text-lg">
            Ideal for offices, parties, and events, providing fast, high-quality meals in bulk.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#7D0C0C] focus:ring-offset-2">
          <div className="mb-6">
            <Image
              src="/FastCasual/fc-10.png"
              alt="fast food franchise"
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg transform hover:scale-110 duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-black">Healthy Side Options</h3>
          <p className="mt-2 text-black text-lg">
            Fresh salads, grain bowls, and grilled options that complement your meal while maintaining a healthy lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
