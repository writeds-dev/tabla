"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ImageItem {
  src: string;
}

export interface WhyChooseUsProps {
  sectionTagline: string;
  headingLine1: string;
  headingLine2: string;
  introHeading: string;
  introText: string;
  benefitsHeading: string;
  benefitsList: BenefitItem[];
  ctaText: string;
  ctaHref: string;
  images: ImageItem[];
}

export default function WhyChooseUs({
  sectionTagline,
  headingLine1,
  headingLine2,
  introHeading,
  introText,
  benefitsHeading,
  benefitsList,
  ctaText,
  ctaHref,
  images,
}: WhyChooseUsProps) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12" aria-labelledby="why-choose-us">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <p className="text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wider text-center">
          {sectionTagline}
        </p>

        {/* Main Heading */}
        <h2
          id="why-choose-us"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 text-center leading-tight"
        >
          <span className="text-red-700">{headingLine1}</span>
          <span className="block">{headingLine2}</span>
        </h2>

        <article className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Slider */}
          <figure className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-xl shadow-lg"
              aria-live="polite" // Added aria-live for dynamic content announcement
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Franchise business benefit image ${index + 1} showing [specific feature or benefit]`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </figure>

          {/* Text Content */}
          <div className="space-y-8">
            <header>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                {introHeading}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">{introText}</p>
            </header>

            {/* Benefits List */}
            <section aria-labelledby="benefits-heading">
              <h4 id="benefits-heading" className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                {benefitsHeading}
              </h4>
             <ul className="space-y-5" aria-describedby="benefits-description">
  {benefitsList.map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      <CheckCircle className="w-6 h-6 text-orange-600 mt-1" />
      <div>
        <p className="text-lg font-semibold text-gray-900">{item.title}</p>
        <p className="text-base text-gray-600">{item.description}</p>
      </div>
    </li>
  ))}
</ul>

            </section>

            {/* CTA */}
            <footer className="pt-4">
              <Link
                href={ctaHref}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-base font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                aria-label={`Learn more about ${ctaText}`} // More descriptive aria-label
              >
                {ctaText}
              </Link>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
}
