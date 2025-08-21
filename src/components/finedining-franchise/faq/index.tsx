"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing better toggle icons

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is a fine dining restaurant franchise?",
    answer:
      "A fine dining franchise offers a premium experience—upscale interiors, refined service, and a chef-driven menu. Tabla’s fine dining model delivers all of this with a contemporary Indian and Asian fusion twist.",
  },
  {
    question: "Does Tabla offer a fine dining format for franchising?",
    answer:
      "Yes. Our fine dining franchise model is designed for premium markets and includes curated Indian, Thai, and Indo-Chinese dishes, paired with a luxurious ambiance and high-end presentation.",
  },
  {
    question: "How is fine dining different from casual or fast casual dining?",
    answer:
      "Fine dining focuses on the overall experience—carefully designed interiors, attentive service, and a thoughtfully crafted menu. Tabla’s fine dining format delivers an immersive journey that goes beyond just food.",
  },
  {
    question: "Is investing in an upscale dining franchise profitable?",
    answer:
      "It can be very rewarding. With higher average ticket sizes, repeat clientele, and a strong brand presence, Tabla’s fine dining outlets are built to perform well in the right markets. Operational efficiency is a key part of our model, even at the premium level.",
  },
  {
    question: "What are the key features of Tabla’s fine dining franchise?",
    answer:
      "Signature décor, chef-led kitchens, a refined multi-cuisine menu, and a commitment to quality. We focus on consistency, presentation, and guest satisfaction to create a memorable experience across all locations.",
  },
  {
    question: "How do I know if fine dining will work in my market?",
    answer:
      "If your target location draws a well-traveled, affluent, or experience-seeking audience, a fine dining concept like Tabla’s can do exceptionally well. We help assess the location’s potential and fit before onboarding.",
  },
];

const FAQHandbook: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl text-center mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Got{" "}
          <span className="text-red-800 hover:text-[#4A2C2A] transition-all duration-300 ease-in-out">
            Questions?{" "}
            <span className="text-black">We&rsquo;ve Got Answers</span>
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-black mb-8 font-bold leading-relaxed tracking-wide max-w-3xl mx-auto transition-all duration-300 ease-in-out">
          Here&rsquo;s everything you need to know before you get started with
          Tabla Franchise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-[#4A2C2A]">
                  {faq.question}
                </h3>
                <button
                  className="text-[#9B6E57] text-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9B6E57] focus:ring-offset-2"
                  onClick={() => toggleFAQ(index)}
                  aria-label="Toggle FAQ answer"
                >
                  {openFAQ === index ? (
                    <FiChevronUp className="text-xl" />
                  ) : (
                    <FiChevronDown className="text-xl" />
                  )}
                </button>
              </div>

              <div
                className={`mt-4 text-md text-[#4A2C2A] transition-all duration-300 ease-in-out ${
                  openFAQ === index
                    ? "max-h-[500px] opacity-100" // Set a reasonable max-height for smooth transitions
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQHandbook;
