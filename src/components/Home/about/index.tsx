"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const FeatureSection = () => {
  const [count, setCount] = useState(0); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let counter = 1; 
          const interval = setInterval(() => {
            if (counter <= 8) {
              setCount(counter);
              counter += 1;
            } else {
              clearInterval(interval); 
            }
          }, 300); 
        }
      },
      {
        threshold: 0.5,  
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);  
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);  
      }
    };
  }, []);
  const featureCards = [
    { id: 1, title: "Trusted Vendor Partners", image: "/shared/partners.webp", alt: "trusted vendors partner", description: " Benefit from established relationships with reliable suppliers, marketing platforms, and tech partners. ", paragraph: "We have a long history of delivering measurable results for our clients, continuously improving processes and achieving growth." },
    { id: 2, title: "Proven Track Record", image: "/shared/record.webp", alt: "record partner", description: " With multiple thriving locations in Central Florida and beyond, Tabla offers one of the most reliable and rewarding restaurant franchise opportunities today. ", paragraph: "By working with the most trusted vendors, we provide you with unparalleled quality and reliability. Our partners share our commitment to excellence." },
    { id: 3, title: "3 More Locations", icon: "fas fa-bolt", text: "Coming Soon!", description: "We are expanding to new locations to serve you better." },
    { id: 4, title: "Higher Revenue", image: "/shared/revenue.webp", alt: "revenue partner", description: " Our diverse menu, loyal customer base, and scalable model help maximize profitability in both fast casual franchise and fine dining formats." },
    { id: 5, title: "Expert Training & Support", image: "/shared/record.webp", alt: "training partner", description: " Franchise owners receive 2-3 weeks of comprehensive pre-opening training and full onsite launch assistance. Our mentorship continues as your business grows." },
  ];
  return (
    <section className="py-8 bg-white text-black">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">
          Key Features of the   <span className="text-red-800">Tabla Franchise Model</span>
        </h2>
        <p className="mt-2 text-base text-black">
          Discover the key features that make our platform the best choice.
        </p>
      </div>
      {/* Feature Cards Layout */}
      <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {/* Locations Counter */}
        <div
          ref={sectionRef} 
          className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md"
        >
          <div className="relative">
            <h3 className="mt-2 text-[10rem] font-semibold">
              {count}
              <sup className="absolute top-0 right-[-18px] text-5xl text-red-900">
                {'+'}
              </sup>
            </h3>
          </div>
          <p className="mt-2 text-xl font-bold text-center">8+ Locations Nationwide  We&apos;re Always Nearby</p>
        </div>
        {/* Render Feature Cards with Unique Keys */}
        {featureCards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col items-center p-4 rounded-lg shadow-md ${
              card.id === 0 || card.id === 3 ? "bg-red-700 text-white" : "bg-white text-black"
            }`}
          >
            {card.image ? (
              <div className="text-6xl text-purple-500 mb-2">
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="w-12 h-12"
                />
              </div>
            ) : (
              <div className="text-4xl text-yellow-400 mb-2">
                <i className={card.icon}></i>
              </div>
            )}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            {card.description && <p className="mt-1 text-md">{card.description}</p>}
            {card.paragraph && <p className="mt-1 text-center text-md text-black/70">{card.paragraph}</p>}
            {card.text && <p className="mt-1 text-center text-sm">{card.text}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeatureSection;
