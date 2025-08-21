import Link from "next/link";
import Image from "next/image";
import { Utensils, BarChart2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl lg:text-5xl font-semibold bg-white text-center text-black">
          Why Partner with <span className="text-red-800">Tabla</span> Franchise?
        </h2>
        <p className="mt-6 text-lg text-gray-900 bg-white text-center mx-auto max-w-3xl">
          As a Tabla Franchise partner, you&apos;ll benefit from a proven system, chef-driven menu, and full operational support tailored for success. Join us to be part of a thriving, innovative, and dynamic franchise community that offers unmatched growth potential.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left Section */}
          <div className="flex flex-col justify-start items-stretch space-y-6">
            <ul className="space-y-6">
              {/* List Items */}
              {[{
                  number: '01', title: 'Brand Identity', description: 'A well-established brand identity built on trust, taste, and tradition.' },
                { number: '02', title: 'Turnkey Setup', description: 'Complete restaurant setup assistance from day one.' },
                { number: '03', title: 'Training & Ops', description: 'Comprehensive training and operational support at every step.' },
                { number: '04', title: 'Marketing Support', description: 'Ongoing marketing, promotions, and national branding efforts.' },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4 group hover:scale-105 transform transition-all duration-300 ease-in-out">
                  <div className="w-16 h-16 bg-red-800 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-xl font-semibold">{item.number}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                    <span className="text-xl font-semibold text-gray-800 group-hover:text-red-600">{item.title}</span>
                    <p className="text-gray-900 mt-2 group-hover:text-gray-800">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Replace <img> with <Image> component */}
            <Image 
              src="/FineDine/Crousel/l-1.jpeg" 
              alt="Fine dining  franchise USA"
              width={600} 
              height={400} 
              className="w-full mt-6 rounded-lg shadow-md" 
            />
          </div>

          {/* Right Section (Image and Mission Cards with Icons) */}
          <div className="flex flex-col justify-start items-stretch">
            <div className="relative">
              <Image
                src="/Home/orlando.webp"
                alt=" best fine dining franchise in America"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />

              {/* Fine Image Positioning */}
              <div className="bottom-4 left-4 right-4 mt-5 bg-white bg-opacity-70 rounded-lg p-6">
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                  {/* Card 1: Chef-Curated Menu */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <Utensils className="w-8 h-8 text-red-600" />
                      <h3 className="text-xl font-semibold text-gray-800">Chef-Curated Menu</h3>
                    </div>
                    <p className="text-gray-900">
                      A menu designed by expert chefs using premium ingredients.
                    </p>
                  </div>

                  {/* Card 2: Clear & Confident */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <BarChart2 className="w-8 h-8 text-red-600" />
                      <h3 className="text-xl font-semibold text-gray-800">Clear & Confident</h3>
                    </div>
                    <p className="text-gray-900">
                      Access to proven business systems and scalable growth models.
                    </p>
                  </div>
                </div>

                <div className="py-6">
                  <h3 className="text-gray-900">
                    Whether you&apos;re an entrepreneur looking to invest in food & hospitality or an experienced restaurateur ready to expand, Tabla offers a franchise model that blends creativity, profitability, and operational consistency. Each Tabla location reflects our signature essence — elegant interiors, attentive service, and an inspired Indian menu with vegetarian, vegan, and non-vegetarian options. From luxury dine-in to elevated takeout, every experience is a celebration of flavor and culture.
                    <blockquote className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-8 text-white text-lg sm:text-xl md:text-xl italic font-thin rounded-lg shadow-lg mx-auto max-w-3xl my-10">
                      <div className="absolute inset-0 bg-opacity-25 bg-gray-800 rounded-lg"></div>
                      <p className="relative z-10">
                        Don&apos;t miss your chance to lead a premium dining revolution. Join the Tabla Franchise family and grow with one of America&apos;s top Indian restaurant brands.
                      </p>
                      <footer className="relative z-10 mt-6 text-sm text-right">
                        <cite>- Tabla Franchise</cite>
                      </footer>
                    </blockquote>
                  </h3>
                </div>
                <div className="text-center">
  <Link href="/contact">
    <div className="bg-red-800 text-white mt-5 px-4 py-3 rounded-full w-full md:w-auto inline-block">
      Inquire Now
    </div>
  </Link>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
