"use client";

import React, { useState } from "react";
import Head from "next/head";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this franchise suitable for a fine dining setup in a metropolitan area?",
    answer:
      "Yes, Tabla is a great fit for a fine dining restaurant franchise, especially in big cities. Our brand and menu are designed to attract customers looking for high‑quality Indian and Asian food franchises in metropolitan areas.",
  },
  {
    question: "Can I convert my existing restaurant into a Tabla franchise?",
    answer:
      "Absolutely! You can turn your current restaurant into a Tabla food franchise. We’ll guide you through the process and help you adopt our franchise business model smoothly.",
  },
  {
    question: "What kind of return on investment (ROI) can I expect from a fine dining franchise?",
    answer:
      "While results vary, many of our fine dining restaurant franchise owners see strong returns thanks to our proven restaurant franchise system, popular cuisine, and efficient operations. For more details you can contact our team.",
  },
  {
    question: "Are there exclusive territories available for new franchisees?",
    answer:
      "Yes, we offer exclusive territories to new franchise business owners. This helps you grow your Indian franchise in USA without direct competition from other Tabla locations nearby.",
  },
  {
    question: "Is financing assistance available for new franchisees?",
    answer:
      "Yes, we can help connect you with financing options that support new food franchise opportunities. This makes it easier to start your journey with Tabla.",
  },
  {
    question: "How does the franchise ensure consistency across multiple locations?",
    answer:
      "We maintain quality and consistency in every restaurant franchise through detailed training, regular audits, and standardized recipes. This helps all locations deliver the same great experience.",
  },
  {
    question: "What makes Tabla different from other Indian food franchises in the U.S.?",
    answer:
      "Tabla stands out among Indian franchises in the USA because of our chef‑independent operations, mix of Indian and Asian cuisine, strong brand, and ongoing support for franchise owners.",
  },
  {
    question: "Is Tabla a good choice for first‑time food franchise owners?",
    answer:
      "Yes! Tabla is one of the best food franchise opportunities for beginners. We offer complete training and guidance, so you don’t need prior restaurant experience.",
  },
  {
    question: "Do you offer a fast‑casual restaurant franchise option in addition to fine dining?",
    answer:
      "Yes, Tabla offers both fine dining restaurant franchise and fast‑casual franchise options. You can choose the format that best suits your location and budget.",
  },
  {
    question: "What ongoing support does Tabla provide to food franchise owners?",
    answer:
      "We provide full support—including marketing, training, and daily operations—to help you run your food franchise successfully. You’re never alone in your journey with Tabla.",
  },
  {
    question: "What licensing or permits do I need to start a restaurant franchise with Tabla?",
    answer:
      "You’ll need standard local licenses and a permit for opening a restaurant franchise. Our team will guide you through this process step by step.",
  },
  {
    question: "How does Tabla maintain quality control across its restaurant franchises?",
    answer:
      "We have clear systems and tools to keep quality high in every restaurant franchise. This includes supplier checks, regular staff training, and consistent food preparation methods.",
  },
  {
    question: "Can I customize the menu at my Tabla food franchise location?",
    answer:
      "While we offer a set menu, some limited customization is allowed based on local tastes—while still keeping the franchise business model and brand identity intact.",
  },
];

const FAQHandbook: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl text-center mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
  Got{" "}
  <span className="text-red-800 transition-all duration-300 ease-in-out">
    Questions? <span className="text-black">We&rsquo;ve Got Answers</span>
  </span>
</h2>


          <p className="text-lg sm:text-xl text-black mb-8 font-medium leading-relaxed tracking-wide max-w-3xl mx-auto transition-all duration-300 ease-in-out ">
            Here&rsquo;s everything you need to know before you get started with Tabla Franchise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-black">{faq.question}</h3>
                  <button
                    className="text-black text-xl cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {openFAQ === index ? "−" : "+"}
                  </button>
                </div>

                {openFAQ === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="mt-4 text-md text-black transition-all duration-300 ease-in-out"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQHandbook;
