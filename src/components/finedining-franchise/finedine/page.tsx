// app/franchiese-model/fine-dining-franchise/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Download } from 'lucide-react';

import CallToAction from '../../../components/finedining-franchise/CallToAction/Cat';
import TablaFranchise from '../../../components/finedining-franchise/TablaFranchise/TablaFranchise';
import ChooseUs from '../../../components/finedining-franchise/WhyChooseUs/ChooseUs';
import Beliefs from '../../../components/finedining-franchise/TrueBeliefs/Beliefs';
import FAQHandbook from '../../../components/finedining-franchise/faq';
import Contact from '@/components/finedining-franchise/CTA/page';
import ImageSlider from '@/components/finedining-franchise/ImageSlider/pages';
import FinePackages from '@/components/finedining-franchise/finedineExp/page';
import SimpleContactForm from '@/shared/email';
import Testimonial from '../Testimonial/page';

const imageUrls = [
  '/FineDine/Crousel/01.webp',
  '/FineDine/Crousel/l-1.jpeg',
  '/FineDine/Crousel/orlando.jpeg',
  '/FineDine/Crousel/ovedio-1.jpeg',
];

export default function FineDine() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter(); 

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSuccess = () => {
    closeModal();
    router.push('/emailverification'); 
  };
  return (
    <>

      <div className="font-sans text-gray-800 overflow-x-hidden">
        {/* Hero Section */}
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl min-h-[500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Modern Indian Fine Dining Franchise Opportunity with Tabla
              </h1>
              <p className="text-lg sm:text-xl text-white">
                Are you ready to be part of a premium dining revolution? Tabla
                Franchise offers a unique opportunity to own a modern Indian
                fine dining restaurant franchise — a brand that brings authentic
                Indian flavors with a contemporary twist to diners across the
                USA.
              </p>

              {/* Contact & Download Buttons */}
              <div className="flex flex-wrap space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300"
                >
                  <Mail className="text-red-800" />
                  Contact Us
                </Link>
                <button
                  onClick={openModal}
                  className="inline-flex items-center cursor-pointer gap-3 bg-white text-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition-all duration-300"
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
        <TablaFranchise />
        <Testimonial/>
        <FinePackages />
        <Beliefs />
        <ChooseUs />
        <CallToAction />
        <Contact />
      </div>

      {/* FAQ */}
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
            <SimpleContactForm onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </>
  );
}
