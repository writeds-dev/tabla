'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Download } from 'lucide-react';
import InvestmentCTASection from '../CallToAction/CalltoAction';
import Investment from '../Investment-Breakdown/Investment';
import InvestmentInclusionsSection from '../Investment-Inclusion/Inclusion';
import ImageSlider from '@/components/franchise-investment/ImageSlider/pages';
import SimpleContactForm from '@/shared/email'; 

const imageUrls = [
  '/Investment/signage.webp',
  '/Investment/intialcapital.webp',
];

const FranchiseInvestmentDetails=()=>{
  const [showModal, setShowModal] = useState(false); 

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSuccess = () => {
    closeModal();
    window.location.href = '/emailverification';
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl min-h-[500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Tabla Franchise Investment
            </h1>
            <p className="text-lg sm:text-xl text-white">
              Be a Part of Tabla&apos;s Growing Legacy. Join a brand that blends tradition, innovation, and community. Choose your option – a cozy Fast Casual place or an elegant Fine Dining experience.
            </p>

            {/* Contact Us Link */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300 ease-in-out"
            >
              <Mail className="text-red-800" />
              Contact Us
            </Link>

            {/* Download Catalog Button */}
            <button
              onClick={openModal} // Opens modal
              className="inline-flex items-center cursor-pointer gap-3 ml-2 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300 ease-in-out"
            >
              <Download className="text-red-800" />
              Download brochure
            </button>
          </div>

          {/* Image Slider */}
          <ImageSlider imageUrls={imageUrls} />
        </div>
      </div>

      {/* Other Sections */}
      <Investment />
      <InvestmentInclusionsSection />
      <InvestmentCTASection />

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
    </div>
  );
}

export default FranchiseInvestmentDetails;