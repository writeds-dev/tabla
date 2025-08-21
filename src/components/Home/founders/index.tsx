
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Founders() {
  const para = "text-base lg:text-lg leading-relaxed tracking-wide text-gray-800";

  const founders = [
    {
      name: "Anshu Jain",
      title: "CEO & Founder",
      image: "/shared/Anshujain.png",
      quote:
        "What started as a single restaurant in 2008 has grown into a franchise. Anshu leads Tabla’s national rollout, bringing Indian flavors to communities nationwide and supporting franchisee success.",
      description:
        "Anshu Jain, a graduate of Ohio State University’s Fisher College of Business, brings over 25 years of hospitality experience. He co-founded Stealth Management Group and Tabla, blending business excellence with authentic Indian cuisine.",
    },
    {
      name: "Nora Jain",
      title: "Co-Founder & President",
      image: "/shared/Norajain.png",
      quote:
        "With an engineering mind and culinary passion, Nora has shaped operations from the ground up — ensuring consistent quality and supporting partner growth.",
      description:
        "Nora Jain is Co‑Founder and COO of Gourmet Chefs, LLC and Tabla Franchise LLC. With a Master's in Structural Engineering from Arizona State University, she combines technical acumen with culinary passion.",
    },
  ];

  return (
    <section
      id="founders"
      className="bg-white py-20"
      aria-labelledby="founders-heading"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {/* Section Heading */}
        <div className="text-center relative">
          <h2
  id="founders-heading"
  className="text-4xl lg:text-5xl font-extrabold text-red-800 bg-white"
>
  Meet Our <span className="text-black">Founders</span>
</h2>

          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Founders Loop */}
        {founders.map((founder, idx) => (
          <div
            key={founder.name}
            className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
             <h3 className="text-2xl font-bold text-black bg-white">
  {founder.name}
</h3>

            <p className="text-lg uppercase tracking-wider text-red-600 font-semibold bg-white">
  {founder.title}
</p>

<p className={`${para} text-black`}>{founder.description}</p>
             <blockquote className="relative p-6 bg-white border-l-8 border-red-600 shadow-md rounded-lg">
  <Quote className="absolute top-6 left-6 w-6 h-6 text-red-600 opacity-30" />
  <p className="text-lg text-black font-medium italic pl-10">
    {founder.quote}
  </p>
  <div className="mt-4 border-t border-dashed border-red-200 pt-2 text-sm text-gray-600 italic">

  </div>
</blockquote>

            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src={founder.image}
                alt={founder.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6">
                <h4 className="text-xl font-semibold">{founder.name}</h4>
                <p className="text-xs uppercase tracking-widest mt-1">
                  {founder.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
