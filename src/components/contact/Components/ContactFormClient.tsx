import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import FormClient from "../clientComponent/ClientContactForm";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12 md:px-20">
        {/* Header Section */}
        <section
          className="max-w-4xl mt-10 mx-auto mb-16 text-center"
          role="region"
          aria-labelledby="contact-heading"
        >
          <h1
            id="contact-heading"
            className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block"
          >
            Ready to Connect?
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-red-600 rounded-full"></span>
          </h1>

          <p className="text-2xl italic font-bold text-gray-800 mb-6 drop-shadow-md">
            Send us an email today
          </p>

          <p className="max-w-xl mx-auto text-lg text-gray-600 sr-only">
            Contact Tabla Franchise team through the form below.
          </p>
        </section>

        {/* Contact Container */}
        <div className="max-w-6xl mx-auto bg-white  shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Info Panel */}
          <aside
            className="bg-gradient-to-b from-red-900 to-red-700 p-10 text-white flex flex-col justify-between"
            aria-label="Contact Information"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-8 text-gray-200">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              <ul className="space-y-5 text-lg" role="list">
                <li className="flex items-center gap-4">
                  <Phone size={20} aria-hidden="true" />
                  <a
                    href="tel:+16896989212"
                    className="hover:underline"
                    aria-label="Call Tabla Franchise"
                  >
                    +1 (689) 698-9212
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} aria-hidden="true" />
                  <a
                    href="mailto:info@tablafranchise.com"
                    className="hover:underline"
                    aria-label="Email Tabla Franchise"
                  >
                    info@tablafranchise.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin size={20} aria-hidden="true" />
                  <span>
                    5829 Grand National Drive,<br />
                    Orlando, FL 32819
                  </span>
                </li>
              </ul>
            </div>

            {/* Map Image */}
            <div className="mt-10 mx-auto">
              <Image
                src="/About/map.png"
                alt="Map showing Tabla Franchise location in Orlando, Florida"
                width={280}
                height={186}
                className="rounded-lg shadow-md"
                priority
                loading="eager"
              />
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div
                className="flex space-x-6 text-white text-2xl"
                role="navigation"
                aria-label="Social media links"
              >
                <Link
                  href="https://www.instagram.com/tablacuisine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Tabla on Instagram"
                  className="hover:text-pink-400"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/Tablacuisine"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Tabla on Facebook"
                  className="hover:text-blue-500"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://x.com/tablacuisine"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Tabla on X (Twitter)"
                  className="hover:text-black"
                >
                  <BsTwitterX size={24} />
                </Link>
                <Link
                  href="https://www.youtube.com/@Tablacuisine"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Tabla on YouTube"
                  className="hover:text-red-600"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Form Panel */}
          <section
            className="bg-white "
            aria-label="Contact Form"
          >
            <FormClient />
          </section>
        </div>
      </div>
    </>
  );
}
