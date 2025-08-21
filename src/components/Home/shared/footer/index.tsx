import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs"; // Correct import for TwitterX icon
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <Image
            width={160}
            height={62}
            src="/shared/logo-new.svg"
            alt="Tabla Franchise Logo"
             priority
          />
          <p className="mt-6 text-sm text-gray-700">
            We cherish the awesome reviews and feedback from guests. Join us as
            a Franchise owner and be a part of our shared celebrations.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="mailto:info@tablafranchise.com" className="hover:underline">
                info@tablafranchise.com
              </Link>
            </li>
            <li>
              <Link href="mailto:sales@tablafranchise.com" className="hover:underline">
                sales@tablafranchise.com
              </Link>
            </li>
            <li>
              <Link href="tel:+16896989212" className="hover:underline">
                +1 (689) 698-9212 </Link>
            </li>
            <li>5829 Grand National Dr, Suite F, Orlando, FL 32819, United States</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/tablacuisine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tablacuisine on Instagram (opens in a new window)"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/Tablacuisine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tablacuisine on Facebook (opens in a new window)"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://x.com/tablacuisine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tablacuisine on Twitter (opens in a new window)"
              className="text-black hover:text-black"
            >
              <BsTwitterX size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/@Tablacuisine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tablacuisine on YouTube (opens in a new window)"
              className="text-red-600 hover:text-red-700"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Legal Info */}
      <div className="max-w-7xl mx-auto mt-10 text-center text-xs text-gray-600 border-t border-gray-300 pt-6">
        <p>
          &copy; {new Date().getFullYear()} Tabla Franchise |{" "}
          <Link
            href="https://www.tablacuisine.com/terms-and-condition"
            className="hover:underline"
          >
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link
            href="https://www.tablacuisine.com/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

        <p className="mt-4">
          We comply with all franchise laws. We are not offering franchises in HI, IN, ND, RI, SD, or WA until we are registered, as required by law.
        </p>
      </div>
    </footer>
  );
}
