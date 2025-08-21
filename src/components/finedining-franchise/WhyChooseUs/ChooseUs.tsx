import React from 'react'
import Image from 'next/image'
import {
  Coffee,
  ForkKnife,
  CheckCircle,
  Handshake,
  Leaf,
  TrendingUp,
} from 'lucide-react';
import type { ReactElement } from 'react';

interface Feature {
  title: string;
  icon: ReactElement;
  desc: string;
  featured?: boolean;
}

const features: Feature[] = [
  {
    title: 'Real Indian Cuisine',
    icon: <ForkKnife size={32} className="text-[#B04F4F]" aria-label="Fork and Knife icon" />,
    desc: 'An impeccable mix of real Indian cuisine and modern fusion.',
  },
  {
    title: 'Both Fine Dining and Fast Casual',
    icon: <Coffee size={32} className="text-[#B04F4F]" aria-label="Coffee icon" />,
    desc: 'Both fine dining and fast casual options under one brand.',
    featured: true,
  },
  {
    title: 'Consistent Quality',
    icon: <CheckCircle size={32} className="text-[#B04F4F]" aria-label="Check circle icon" />,
    desc: 'Consistent quality across our sites as each location uses our chef-driven recipes and fresh ingredients.',
  },
  {
    title: 'Indian Hospitality',
    icon: <Handshake size={32} className="text-[#B04F4F]" aria-label="Handshake icon" />,
    desc: 'An experiential difference as each guest will be greeted with warmth that is rooted in Indian hospitality.',
  },
  {
    title: 'Menu for Everyone',
    icon: <Leaf size={32} className="text-[#B04F4F]" aria-label="Leaf icon" />,
    desc: 'Menu for everyone — diverse choices that appeal to vegans, vegetarians, gluten-free, and meat-lovers.',
  },
  {
    title: 'Marketable Brand',
    icon: <TrendingUp size={32} className="text-[#B04F4F]" aria-label="Trending up icon" />,
    desc: 'Marketable brand that has been successful at locations using consistent practices.',
  },
];

const ChooseUs = () => {
  return (
    <div>
         <section className="bg-white py-24 px-6 md:px-16" aria-label="Why Choose Tabla">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image + Text */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/FineDine/finedine.webp"
                alt="Gourmet food franchise USA"
                width={800}
                height={600}
                className="object-cover w-full h-96"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                How Tabla <span className="text-[#7D0C0C]">Differs From Others</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Where authentic flavors meet modern elegance. Tabla redefines culinary excellence with handcrafted experiences and heartfelt hospitality.
              </p>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-tr from-white via-[#fff8f6] to-[#fffdfc] border border-[#f1e4de] shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                role="region"
                aria-labelledby={`${item.title.replace(/\s+/g, '-')}-label`}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#7D0C0C]/10 text-[#7D0C0C] text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h4
                  id={`${item.title.replace(/\s+/g, '-')}-label`}
                  className="text-xl font-semibold text-gray-800 group-hover:text-[#7D0C0C] transition-colors duration-300"
                >
                  {item.title}
                </h4>

                <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Subtle Hover Layer */}
                <div className="absolute inset-0 rounded-2xl bg-[#7D0C0C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChooseUs