import Image from "next/image";
import Story from "../../components/about/Story/page";
import Vision from "../../components/about/Vision/page";
import Timeline from "../../components/about/Timeline/page";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Get to Know Tabla Franchise",
  description:
    "Learn how Tabla Franchise is redefining Indian dining with innovation, quality, and proven success. Discover our story today.",
  keywords: [
    "Tabla restaurant franchise",
    "Tabla Indian food franchise",
    "Invest in Tabla franchise USA",
    "Tabla fine dining franchise opportunity",
  ],
  alternates: {
    canonical: "https://www.tablafranchise.com/about",
  },
  openGraph: {
    title: "About Us | Get to Know Tabla Franchise",
    description:
      "Learn how Tabla Franchise is redefining Indian dining with innovation, quality, and proven success. Discover our story today.",
    url: "https://www.tablafranchise.com/about-us",
    type: "website",
    images: [
      {
        url: "https://www.tablafranchise.com/shared/logo-new.svg",
        width: 1200,
        height: 630,
        alt: "Tabla Franchise Logo",
      },
    ],
  },
  robots: "index, follow",
};

const founders = [
  {
    name: "Anshu Jain",
    role: "Founder & CEO",
    title: "grow the Tabla franchise with bold vision",
    image: "shared/Anshujain.png",
    bio: `Anshu Jain has been learning, innovating, and leading for over 25 years. 
          As a co-founder of Stealth Management Group, Anshu owns and manages multiple hotels and businesses all over the country.
          Envisioning a nationwide presence for Tabla, Nora began working with franchise development companies and regulators in 2023 to register as a nationwide franchisor.`,
  },
  {
    name: "Nora Jain",
    role: "Co-Founder & President",
    title: "shape the future of Tabla’s identity",
    image: "shared/Norajain.png",
    bio: `Nora Jain is the Co-Founder and COO of Gourmet Chefs, LLC and Tabla Franchise LLC., 
          and the visionary behind the Tabla Restaurant Brand. With a master's degree in Structural Engineering 
          from Arizona State University, Nora combines her technical expertise with a deep passion for the culinary arts.`,
  },
];

export default function Aboutus() {
  return (
    <main className="text-black overflow-x-hidden font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-black mt-10 py-20 px-8">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="space-y-6 max-w-lg text-white">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              Let’s Know Tabla
            </h1>
            <p className="text-lg lg:text-2xl text-gray-300">
              Tabla Indian Restaurant isn’t just about food — it’s about bringing people together over the rich, vibrant flavors of India.
            </p>
            <ul className="text-gray-300 text-lg  space-y-3 list-disc pl-5">
              <li>What started in 2008 as a family-run restaurant in Orlando by Anshu and Nora Jain has grown into a beloved name across the U.S. Known for its flavorful Indian, Indo-Chinese, and Thai dishes.</li>
              <li>Tabla mixes tradition with creativity in every bite. From comforting curries to fusion street food, Tabla serves up something for everyone.</li>
            </ul>
            <div className="space-x-4 mt-6">
  <Link href="/contact">
    <button className="bg-red-600 text-white cursor-pointer py-3 px-8 rounded-md font-semibold transform hover:scale-105 transition-all ease-in-out duration-300">
      Get Started
    </button>
  </Link>
</div>
          </div>

          <div className="w-1/2 flex justify-end space-x-6">
            <div className="w-1/2 overflow-hidden rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-lg">
              <Image 
                src="/FineDine/Crousel/03.webp"
                width={600}
                height={600}
                alt=" food franchise opportunity"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-1/2 overflow-hidden rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-lg">
              <Image 
                src="/FineDine/Crousel/01.webp" 
                width={600} 
                height={600} 
                alt="food industry franchise" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <Story />
    

      {/* Founders Section */}
      <section id="founders" className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-32  bg-white text-gray-900 font-sans">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-[#7D0C0C] mb-12 sm:mb-16 tracking-tight leading-tight relative">
          <span className="relative z-10">Our Founders</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#7D0C0C] rounded-full mb-1"></span>
        </h2>

        <div className="flex flex-col gap-20">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-10 md:p-16"
            >
              <div className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#7D0C0C] shadow-lg mb-8 md:mb-0 md:mr-16">
                <Image
                  src={`/${founder.image}`}
                  alt={`Photo of ${founder.name}, ${founder.role}`}
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                  priority={false}
                />
              </div>

              <div className="flex flex-col justify-center max-w-4xl">
                <span className="inline-block bg-[#7D0C0C] text-white uppercase text-xs md:text-sm font-semibold tracking-widest rounded-full px-6 py-2 mb-6 shadow-sm select-none max-w-max">
                  {founder.role}
                </span>

                <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#4b0404] leading-tight">
                  I’m <span className="decoration-red-600">{founder.name}</span>
                </h3>

                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#7D0C0C] tracking-tight mb-8 text-center md:text-left">
                  Here to <span className="decoration-yellow-400">{founder.title}</span>
                </p>

                <blockquote className="bg-gray-50 border-l-4 border-[#7D0C0C] p-6 rounded-xl shadow-sm max-w-3xl mx-auto text-gray-700 text-lg lg:text-xl md:text-lg font-medium leading-relaxed">
                  {founder.bio}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Vision Section */}
      <Vision />
    </main>
  );
}
