'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Download } from 'lucide-react';

import Chooseus from '../../../components/fastcasual-franchise/Choose-us/Chooseus';
import FastCasualFeatureSection from '../../../components/fastcasual-franchise/FastSection/FastSection';
import FastCasualSection from '../../../components/fastcasual-franchise/whyTabla/whyTabla';
import MenuHighlightSection from '../../../components/fastcasual-franchise/Menu/Menu';
import FAQHandbook from '../../../components/fastcasual-franchise/faq';
import CallToAction from '../../../components/fastcasual-franchise/CallToAction/Cat';
import Gallery from '@/components/fastcasual-franchise/Gallary/page';
import ImageSlider from '@/components/fastcasual-franchise/ImageSlider/page';
import SimpleContactForm from '@/shared/email';

const imageUrls = [
  '/FastCasual/Schaumberg.jpeg',
  '/FastCasual/fortworth.jpeg',
];

const FastCasual=()=> {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSuccess = () => {
    closeModal();
    router.push('/emailverification'); 
  };

  return (
    <main className="min-h-screen bg-gray-200 text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl min-h-[500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Indian Fast Casual Franchise - Own a Trending Food Business in the USA
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Provide an informal setting for lovers of Indian and Asian cuisine in your community. For entrepreneurs, Tabla is providing a fast-casual franchise opportunity to serve them authentic, flavorful, and fresh Indian food.
            </p>

            {/* Contact & Download Buttons */}
            <div className="flex flex-wrap space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7D0C0C] focus-visible:ring-offset-2"
              >
                <Mail className="text-red-800" />
                Contact Us
              </Link>
              <button
                onClick={openModal}
                className="inline-flex items-center cursor-pointer gap-3 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300 ease-in-out"
              >
                <Download className="text-red-800" />
                Download brochure
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <ImageSlider imageUrls={imageUrls} />
        </div>
      </div>

      {/* Other Sections */}
      <Chooseus />
      <FastCasualFeatureSection />
      <Gallery />
      <FastCasualSection />
      <MenuHighlightSection />
      <CallToAction />
      <FAQHandbook />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Download Our Catalog
            </h2>

            {/* Form for Catalog Download */}
            <SimpleContactForm onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </main>
  );
}

export default FastCasual
