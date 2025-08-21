// app/why-choose-us/ChooseUsClient.tsx
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Download } from 'lucide-react'

import Feature from '../Static/StaticFeatures'
import E2VisaSection from '../VisaSection/chooseus'
import CallToAction from '../CallToAction/CallAction'
import SimpleContactForm from '@/shared/email'

export default function ChooseUsClient() {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const handleSuccess = () => {
    closeModal()
    router.push('/emailverification') 
  }

  return (
    <>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Hero / Help Section */}
        <div className="bg-gradient-to-r from-black to-black mt-10 py-20 px-8">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="space-y-6 max-w-lg text-white">
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                We&apos;re Here to Help
              </h1>
              <p className="text-lg lg:text-xl text-gray-300">
                Have a question about our menu, reservations, franchise, or events? Our team at Tabla is
                happy to assist. Call us, message us, or stop by — we&apos;re always here to help you enjoy
                the best dining experience.
              </p>
              <div className="mt-6 flex flex-wrap space-x-4">
                <Link href="/contact">
                  <button className="bg-red-600 text-white py-3 px-8 rounded-md font-semibold flex items-center space-x-3 hover:scale-105 transition duration-300">
                    <Mail className="h-5 w-5" />
                    <span>Contact Us</span>
                  </button>
                </Link>
                <button
                  onClick={openModal}
                  className="inline-flex cursor-pointer items-center gap-3 bg-white text-red-800 px-6 py-3 rounded-lg shadow-lg hover:bg-red-200 hover:text-red-700 transition duration-300"
                >
                  <Download className="h-5 w-5" />
                  <span>Download brochure</span>
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-xl px-6">
                <div className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition">
                  <Image
                    src="/FineDine/Crousel/0.2.webp"
                    width={600}
                    height={600}
                    alt="Most profitable fast food franchise to own" className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition">
                  <Image
                    src="/FineDine/Crousel/l-1.jpeg"
                    width={600}
                    height={600}
                    alt="Restaurant franchise for sale"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <Feature />
        <E2VisaSection />
        <CallToAction />
      </main>

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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Download Our Catalog</h2>

            {/* Your existing email form */}
            <SimpleContactForm onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </>
  )
}
