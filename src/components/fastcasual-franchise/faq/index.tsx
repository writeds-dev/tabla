"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What makes a fast casual franchise worth investing in?",
    answer:
      "The most attractive fast casual franchises offer easy-to-run operations, mass appeal, and strong growth potential. Tabla’s model checks all these boxes with its modern take on Indian cuisine served in a quick, efficient format designed for today’s consumer.",
  },
  {
    question: "Does Tabla Franchise offer a fast casual Asian franchise model?",
    answer:
      "Yes, Tabla’s fast casual model brings together Indian, Thai, and Chinese flavors, offering a vibrant and diverse menu in a quick-serve environment. It’s ideal for urban, multicultural markets where bold, fresh flavors are in demand.",
  },
  {
    question: "Are fast casual franchise opportunities profitable?",
    answer:
      "Absolutely. Fast casual restaurants typically run on lower labor costs and faster table turnover, making them lean and efficient. Tabla’s format is built to maximize volume without compromising on food quality.",
  },
  {
    question: "What makes fast casual franchises different from fast food?",
    answer:
      "Unlike fast food, fast casual emphasizes fresh ingredients, made-to-order meals, and a more comfortable dine-in setup. Tabla offers the feel of a sit-down restaurant with the speed and convenience today’s diners expect.",
  },
  {
    question: "How much does it cost to start a fast casual restaurant franchise?",
    answer:
      "The estimated initial investment is around $185,000, depending on the location and size. This includes setup, equipment, and initial marketing. Tabla’s offering is competitively priced, especially considering the brand positioning and support included.",
  },
  {
    question: "Is Tabla a good fast casual restaurant franchise for new owners?",
    answer:
      "Definitely. With complete training, marketing assistance, and a simple operating model, Tabla is a great opportunity for first-time entrepreneurs looking to enter the restaurant space with confidence.",
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
          <span className="text-red-800 transition-all duration-300 ease-in-out">
            Questions?{" "}
            <span className="text-black">We&rsquo;ve Got Answers</span>
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-black mb-8 font-medium leading-relaxed tracking-wide max-w-3xl mx-auto transition-all duration-300 ease-in-out">
          Here&rsquo;s everything you need to know before you get started with
          Tabla’s fast casual franchise.
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
                  className="text-black text-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9B6E57] focus:ring-offset-2"
                  onClick={() => toggleFAQ(index)}
                  aria-label={`Toggle FAQ answer for ${faq.question}`}
                >
                  {openFAQ === index ? "−" : "+"}
                </button>
              </div>

              <div
                className={`mt-4 text-md text-black transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
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
