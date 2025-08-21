import React from 'react';
import {
  Home, DollarSign, FileText, Star, Wine, Megaphone, MapPin, Cpu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; 
import FastCasualImageSlider from '../fastslider/page';
import FineDiningImageSlider from '../fineslider/page';
import './index.scss';

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl" aria-hidden="true">{icon}</div>
      <div>
        {label && <p className="text-lg font-semibold text-gray-800">{label}</p>}
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
}

const images = [
  "/Invest/i-1.jpg",
  "/Invest/i-2.jpg",
  "/Invest/i-3.jpg",
  "/Invest/i-4.jpg",
  "/Invest/i-5.jpg",
  "/Invest/i-6.jpg",
  "/Invest/i-7.jpg",
];

const images2 = [
  "/InvestFine/f-1.jpg",
  "/InvestFine/f-2.jpg",
  "/InvestFine/f-3.jpg",
  "/InvestFine/f-4.jpg",
  "/InvestFine/f-5.jpg",
];

const extendedImages = [...images, images[0]];
const extendedImages1 = [...images2, images2[0]];

const cards = [
  {
    icon: <DollarSign />,
    title: 'Royalty',
    subtitle: '6% of Gross Sales/Week',
    desc: 'We utilize the royalty funds to ensure your success by providing continued support and training.',
  },
  {
    icon: <Megaphone />,
    title: 'Brand Development Fund',
    subtitle: '2% of Gross Revenue/Week',
    desc: 'We run constant brand awareness campaigns and business development initiatives across all outlets.',
  },
  {
    icon: <MapPin />,
    title: 'Local Advertising',
    subtitle: '2% of Gross Revenue/Month',
    desc: 'Used for hyper-local marketing efforts to drive traffic and boost community presence.',
  },
  {
    icon: <Cpu />,
    title: 'Technology Fee',
    subtitle: '$500/month (Fast Casual) | $750/month (Fine Dining)',
    desc: 'Covers advanced systems to improve operations and elevate the customer experience.',
  },
];

const Investment = () => {
  return (
    <div>
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-white relative overflow-hidden" aria-labelledby="investment-breakdown-heading">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 id="investment-breakdown-heading" className="text-4xl sm:text-5xl font-extrabold text-[#7D0C0C] tracking-tight mb-6 relative">
      Investment Breakdown
      <span className="block mx-auto mt-3 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
    </h2>

    <div className="relative max-w-2xl mx-auto mt-6 text-black">
      <p className="text-lg sm:text-lg leading-relaxed font-medium bg-[#FFF7ED] px-5 py-4  shadow-sm border-l-4 border-yellow-400">
        Choose a model that fits your goals — from quick-service concepts to premium dining spaces.
      </p>
    </div>
  </div>

  <div className="mt-20 space-y-28">
    {/* Fast Casual */}
    <div className="flex flex-col lg:flex-row items-center gap-14">
      {/* Image Section */}
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[500px] sm:h-[500px] lg:h-[400px] overflow-hidden shadow-lg">
        <FastCasualImageSlider images={extendedImages} duration={3000} />
      </div>

      {/* Info Card */}
      <div className="relative w-full lg:w-1/2 bg-white p-5 border border-yellow-300 shadow-lg px-8 py-10 space-y-6 transition-transform duration-300 hover:shadow-2xl h-[500px] sm:h-[500px] lg:h-[400px]" aria-labelledby="fast-casual-heading">
        {/* Accent Bar */}
        <div/>

        {/* Title and Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-tr from-yellow-400 to-orange-400 text-white p-3 rounded-full shadow-md">
            <Home size={22} aria-hidden="true" />
          </div>
          <h3 id="fast-casual-heading" className="text-2xl lg:text-3xl font-bold text-gray-900">Fast Casual Restaurant</h3>
        </div>

        {/* Investment Details */}
      <ul className="space-y-6 text-black text-3xl lg:text-3xl leading-relaxed">
  <InfoItem 
    icon={<DollarSign className="text-yellow-500 text-3xl" />}
    label="Startup Investment"
    value="$185,000 – $400,000"
  />
  <InfoItem
    icon={<FileText className="text-yellow-500 text-3xl" />}
    label="Franchise Fee"
    value="$36,000"
  />
  <InfoItem
    icon={<Star className="text-yellow-500 text-3xl" />}
    label="Why This Model"
    value="Perfect for entrepreneurs seeking high-efficiency and lower-cost entry into the Indian cuisine market."
  />
</ul>

      </div>
    </div>

    {/* Fine Dining */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
      {/* Image Section */}
      <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[500px] sm:h-[500px] lg:h-[400px] overflow-hidden shadow-lg">
        <FineDiningImageSlider images={extendedImages1} duration={3000} />
      </div>

      {/* Info Card */}
      <div className="relative w-full lg:w-1/2 bg-white shadow-lg border border-red-300 px-8 py-10 overflow-hidden transition-transform duration-300 hover:shadow-2xl h-[500px] sm:h-[500px] lg:h-[400px]" aria-labelledby="fine-dining-heading">
        {/* Accent Gradient Bar */}
        <div/>

        {/* Title + Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-tr from-red-400 to-yellow-400 text-white p-3 rounded-full shadow-md">
            <Wine size={22} aria-hidden="true" />
          </div>
          <div>
            <h3 id="fine-dining-heading" className="text-lg lg:text-3xl font-bold text-gray-900">Fine Dining Restaurant</h3>
            <p className="text-md text-gray-500">Elegant & Elevated Experiences</p>
          </div>
        </div>

        {/* Investment Details */}
        <ul className="space-y-5 text-gray-700 text-xl leading-relaxed">
          <InfoItem
            icon={<DollarSign className="text-red-400" />}
            label="Startup Investment"
            value="$324,000 – $629,000"
          />
          <InfoItem
            icon={<FileText className="text-red-400" />}
            label="Franchise Fee"
            value="$45,000"
          />
          <InfoItem
            icon={<Star className="text-red-400" />}
            label="Why This Model"
            value="Perfect for owners looking to create a high-end Indian dining experience with elevated ambiance and revenue."
          />
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Ongoing Investment Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F7F7F7] relative overflow-hidden">
        {/* Decorative Side Image */}
        <div className="hidden md:block absolute top-0 left-0 w-1/4 h-full pointer-events-none">
          <Image
            src="/Investment/3d.webp"
            alt="Ongoing Investment Image"
            width={320}
            height={600}
            className="h-full object-contain opacity-40"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#f0e0e0] transition-all duration-300 hover:shadow-2xl hover:border-[#d4c6c6]">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#d32f2f] via-[#7D0C0C] to-[#d32f2f] text-transparent bg-clip-text mb-6 leading-tight">
              Ongoing Investment
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
              Our ongoing investment model is designed to support your success from day one.
              Enjoy access to industry-leading tools, powerful marketing strategies, and dedicated support from our expert team.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <span className="inline-block w-2 h-2 bg-[#7D0C0C] rounded-full animate-ping"></span>
              <Link href="/contact">
                <button
                  className="bg-[#7D0C0C] text-white px-6 py-3 rounded-full shadow-md font-semibold transition-transform duration-300 hover:bg-[#a51111] hover:scale- cursor-pointer"
                  aria-label="Join Tabla Franchise"
                >
                  Join Tabla Franchise
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-3"
                aria-labelledby={`${card.title.toLowerCase().replace(/\s+/g, '-')}-heading`}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg">
                    {card.icon}
                  </div>
                </div>
                <h3 id={`${card.title.toLowerCase().replace(/\s+/g, '-')}-heading`} className="text-xl font-semibold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-lg text-[#a75b4e] mb-2 font-semibold">{card.subtitle}</p>
                <p className="text-lg text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
