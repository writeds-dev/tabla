import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChefHat, TrendingUp, Award, UtensilsCrossed } from "lucide-react";

const bulletPoints = [
  "Available in most locations across the USA",
  "Comprehensive training & marketing support",
  "No need for a professional chef",
  "Highly scalable, turnkey model",
];

const features = [
  {
    icon: <ChefHat className="w-8 h-8 text-white" />,
    title: "Chef-Independent Model",
    desc: "Operations designed for ease and scalability without needing expert chefs.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Growth-Focused Support",
    desc: "Ongoing training, marketing, and vendor relationships to maximize ROI.",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Established Since 2008",
    desc: "Strong brand identity built on quality, consistency, and trust.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
    title: "Two Franchise Models",
    desc: "Choose between fast casual and fine dining — both backed by proven systems.",
  },
];

const FastCasualNewDesign = () => {
  return (
    <section className="relative w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/FastCasual/fortworth.jpeg"
          alt="Tabla Fast Casual Franchise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">
            Franchise Opportunities You <span className="text-yellow-400">Can’t Miss</span>
          </h2>
          <p className="max-w-2xl text-xl">
            A proven fast casual model generating <span className="text-yellow-400 font-bold">1.8x more sales</span> 
            than competitors, with nationwide availability and turnkey operations.
          </p>
          <Link
            href="/contact"
            className="mt-6 bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Get started with Tabla franchise"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Bullet Points Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-[#7D0C0C] mb-6">
                Why Choose Tabla?
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                Tabla’s chef-independent fast casual model is built for scalability and success.
              </p>
              <ul className="space-y-4">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <span className="text-black">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Collage */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden shadow-lg">
                <Image
                  src="/Invest/i-3.jpg"
                  alt="best fast casual frachises"
                  width={400}
                  height={256}
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden shadow-lg">
                <Image
                  src="/Invest/i-2.jpg"
                  alt="fast casual resturant franchise"
                  width={400}
                  height={256}
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg col-span-2">
                <Image
                  src="/FastCasual/fortworth.jpeg"
                  alt="fast casual franchise"
                  width={800}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#7D0C0C] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#a32c2c] rounded-xl p-8 text-center text-white shadow-lg hover:scale-105 transition-transform">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-md">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastCasualNewDesign;
