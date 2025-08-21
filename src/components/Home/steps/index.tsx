import React from "react";
import Link from "next/link";
import Image from "next/image";



// Define types for steps and content
export interface StepItem {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
}

export interface StepsContent {
  sectionTagline: string;
  heading: string;
  description: string;
  steps: StepItem[];
  cta?: { 
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const Steps: React.FC<StepsContent> = ({
  sectionTagline,
  heading,
  description,
  steps,
  cta,
  image,
}) => {
  return (
    <section className="bg-white py-5 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">
            {sectionTagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-gray-900 text-xl mb-10 max-w-xl leading-relaxed whitespace-pre-line">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-black">{step.title}</h4>
                  <p className="text-lg text-gray-900">{step.desc}</p>

                </div>
              </div>
            ))}
          </div>

          {cta && ( 
         <Link
  href={cta.href}
  className="mt-10 inline-flex items-center gap-2 bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-orange-700 hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
>
  {cta.text}
</Link>
          )}
        </div>

        {/* Right Column - Image */}
        <div className="w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
