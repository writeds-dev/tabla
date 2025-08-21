'use client';

import React, { useState } from 'react';
import Image from "next/image";
import FranchiseForm from "@/shared/formWrapper";
import { Download, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import SimpleContactForm from '@/shared/email';

export interface HeroSectionProps {
  backgroundImage: string;
  heading: string;
  highlightedWord: string;
  subtitle: string;
  description: string;
  phoneNumber: string;
  awards: { src: string; alt: string }[];
}

export default function HeroSection({
  backgroundImage,
  heading,
  highlightedWord,
  subtitle,
  description,
  phoneNumber,
  awards,
}: HeroSectionProps) {
  const [showModal, setShowModal] = useState(false); 

  const openModal = () => setShowModal(true) 
  const closeModal = () => setShowModal(false);

  const handleSuccess = () => {
    closeModal();
    window.location.href = '/emailverification'; 
  };

  return (
    <header id="home" className="relative text-white p-5 min-h-screen flex items-center">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="" // Decorative image
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 -z-10" />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <section className="space-y-6 text-center md:text-left">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {heading}{" "}
              <span className="text-white">{highlightedWord}</span>{" "}
              <span className="text-yellow-600">Franchise</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              {subtitle}{" "}
              {description.split("important phrase or keyword").map((part, index, arr) => (
                <>
                  {part}
                  {index < arr.length - 1 && (
                    <span className="font-bold text-white">important phrase or keyword</span>
                  )}
                </>
              ))}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Call Button */}
              <Link
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white text-gray-800 font-semibold text-lg shadow-lg hover:scale-105 transition"
                aria-label={`Click to call ${phoneNumber}`}
              >
                  <PhoneCallIcon className="text-red-800" />
                Call {phoneNumber}
              </Link>

              {/* Download Catalog Button (Triggers Modal) */}
              <button
                onClick={openModal}
                className="inline-flex items-center cursor-pointer gap-3 px-6 py-4 rounded-full bg-white text-red-800 font-semibold text-lg shadow-lg hover:scale-105 transition"
                aria-label="Download Catalog"
              >
                <Download className="text-red-800" />
                Download brochure
              </button>
            </div>
          </section>

          {/* Right - Form */}
          <aside className="flex justify-center">
            <div className="rounded-xl p-4 bg-white/10 w-full max-w-lg" role="form" aria-labelledby="hero-heading">
              <FranchiseForm />
            </div>
          </aside>
        </div>

        {/* Awards */}
        {awards.length > 0 && (
          <section className="mt-16 text-center" aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-2xl font-bold text-yellow-400 uppercase mb-6">
              Recognized and Awarded By
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {awards.map((award, idx) => (
                <Image
                  key={idx}
                  src={award.src}
                  alt={`Award logo for ${award.alt || "Award Recognition"}`}
                  width={100}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Modal for Catalog Download */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6">
            <button
              onClick={closeModal} // Closes modal
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Download Our Catalog
            </h2>

            {/* The existing contact form */}
            <SimpleContactForm onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </header>
  );
}
