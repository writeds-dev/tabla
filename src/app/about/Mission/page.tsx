import Image from "next/image";
import Values from "../../../components/mission/Values/page";
import CalltoAction from "../../../components/mission/CTA/page";
import Link from "next/link";
import { Metadata } from "next";
import Awards from "@/components/mission/awards/page";


export default function Mission() {
  return (
    <>
      <div className="max-w-full mx-auto space-y-20 sm:space-y-24 font-sans bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
         <div className="bg-gradient-to-r from-black to-black mt-10 py-20 px-8">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    <div className="space-y-6 max-w-lg text-white">
      {/* New Heading */}
      <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
        Bring the Tabla Experience to Your City
      </h1>

      {/* New Description */}
      <p className="text-lg lg:text-xl text-gray-300">
        Become part of a thriving fine dining legacy — built on a proven model, reliable support, and a flavorful menu that keeps guests coming back.
        Explore our franchise opportunities today.
      </p>

      {/* Updated List */}
   


      {/* Updated Button */}
      <div className="space-x-4 mt-6">
        <Link href="/contact">
          <button className="bg-red-600 text-white cursor-pointer py-3 px-8 rounded-md font-semibold transform hover:scale-105 transition-all ease-in-out duration-300">
            Join Us
          </button>
        </Link>
      </div>
    </div>

    {/* Images */}
  <div className="w-full flex justify-center py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-xl px-6">
    
    {/* Image 1 */}
    <div className="overflow-hidden rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <Image 
        src="/FineDine/Crousel/05.webp"
        width={600}
        height={600}
        alt=" restaurant franchise"
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out"
      />
    </div>
    
    {/* Image 2 */}
    <div className="overflow-hidden rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <Image 
        src="/FineDine/Crousel/orlando.jpeg" 
        width={600} 
        height={600} 
        alt="restaurant franchise for sale" 
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out" 
      />
    </div>
  </div>
</div>

  </div>
</div>
    {/* awards */}
        <Awards/>

        {/* Focus Section */}
      <section className="relative px-4 sm:px-8 md:px-20  shadow-xl overflow-hidden" aria-labelledby="focus-section-title">
  <div className="container mx-auto p-6">
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-4xl lg:text-5xl text-red-800 font-bold mb-4" id="focus-section-title">
        Our Focus
      </h1>
      <p className="text-lg lg:text-xl text-black">
        Core priorities that shape every guest’s experience with passion, precision, and consistency.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Interior Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image src="/Mission/fresh.webp" alt="restaurant franchise " width={500} height={300} className="w-full h-56 object-cover rounded-md" />  
        <div className="mt-4">
          <h3 className="text-2xl text-red-800 font-semibold">Genuine and Fresh</h3>
          <p className="text-black mt-2">
           Our very own authentic Indian spices are combined with real ingredients to give you an authentic taste experience in every bite.
          </p>
        </div>
      </div>

      {/* Exterior Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image src="/Mission/service.webp" alt="restaurant franchise for sale" width={500} height={300} className="w-full h-56 object-cover rounded-md" />
        <div className="mt-4">
          <h3 className="text-2xl text-red-800 font-semibold">Consistent and Dependable</h3>
          <p className="text-black mt-2">
            Crafting striking and sustainable architectural facades that stand outWe deliver great taste, quality, and service-Every time.
          </p>
        </div>
      </div>

      {/* Planning Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image src="/Mission/Paneer.webp" alt="restaurant franchise cost" width={500} height={300} className="w-full h-56 object-cover rounded-md" />
        <div className="mt-4">
          <h3 className="text-2xl text-red-800 font-semibold">Value</h3>
          <p className="text-black mt-2">
            You get generous portions and great quality for just the right price.
          </p>
        </div>
      </div>
      {/* {new card } */}
       <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image src="/Mission/memory.webp" alt="restaurant franchise cost" width={500} height={300} className="w-full h-56 object-cover rounded-md" />
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-red-800">A Memorable Experience</h3>
          <p className="text-black mt-2">
            Food and ambiance - every experience at Tabla is memorable
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    

        {/* Core Values Carousel Section */}
        <Values />

        {/* CTA Section */}
        <CalltoAction />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Our Mission – Tabla Franchise",
  description:
    "At Tabla Franchise, our mission is to bring authentic Indian cuisine to communities across the USA while empowering entrepreneurs through successful restaurant franchise opportunities.",
  keywords: ["mission tabla franchise"],
  alternates: {
    canonical: "https://www.tablafranchise.com/about/Mission",
  },
  openGraph: {
    title: "Our Mission – Tabla Franchise",
    description:
      "Discover Tabla Franchise's mission to bring rich Indian flavors to the nation and empower restaurateurs.",
    url: "https://www.tablafranchise.com/about-us/Mission",
    type: "website",
    images: [
      {
        url: "https://www.tablafranchise.com/shared/logo-new.svg",
        width: 800,
        height: 600,
        alt: "Tabla Franchise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission – Tabla Franchise",
    description:
      "Bringing authentic Indian food to communities across America with our visionary franchise model.",
    images: ["https://www.tablafranchise.com/shared/logo-new.svg"],
  },
};
