"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // This function will be used to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    setFranchiseOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="header-area rounded-b-lg tracking-wide z-50 md:absolute relative top-0 inset-x-0 max-w-5xl mx-auto bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 relative header-inner">
        {/* Mobile Logo */}
        <Link className="cursor-pointer lg:hidden" href="/">
          <Image
            width={150}
            height={62}
            src="/shared/logo-new.svg"
            alt="Logo"
            priority
          />
        </Link>

        {/* Hamburger Menu Button on right (mobile only) */}
        <button
          className="lg:hidden ml-auto text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7D0C0C]"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop and larger screens menu */}
        <div
          id="collapseMenu"
          className="w-full lg:block max-lg:hidden max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 block"
        >
          <div className="lg:flex max-lg:space-y-2 justify-center items-center">
            {/* Left Nav Items */}
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2 relative">
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/franchise-investment"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                  onClick={handleLinkClick} // Added handleLinkClick here
                >
                  Investments
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>

              {/* Franchise Model Dropdown */}
              <li className="relative max-lg:border-b max-lg:py-3 group">
                <button
                  className="flex items-center font-bold nav-link header-text gap-1 relative group text-black"
                  aria-haspopup="true"
                  type="button"
                >
                  Franchise Model
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </button>

                <ul
                  className="
                    absolute left-1/2 top-full mt-2 -translate-x-1/2
                    z-50 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/10
                    py-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transform scale-95 group-hover:scale-100
                    transition-all duration-200 origin-top
                  "
                >
                  <li>
                    <Link
                      href="/franchiese-model/fine-dining-franchise"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        rounded-t-xl
                        transition-colors duration-150
                      "
                      onClick={handleLinkClick} // Added handleLinkClick here
                    >
                      Fine Dine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/franchiese-model/fast-casual-franchise "
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        rounded-b-xl
                        transition-colors duration-150
                      "
                      onClick={handleLinkClick} // Added handleLinkClick here
                    >
                      Fast Casual
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/blogs"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                  onClick={handleLinkClick} // Added handleLinkClick here
                >
                  Blog
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
            </ul>

            {/* Center Logo */}
            <Link
              href="/"
              className="cursor-pointer mx-16 block w-[100px] sm:w-[110px] md:w-[120px]"
            >
              <Image
                src="/shared/logo-new.svg"
                alt="Logo"
                width={120}
                height={50}
                className="h-auto w-full"
                priority
              />
            </Link>

            {/* Right Nav Items */}
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              {/* About Dropdown */}
              <li className="relative max-lg:border-b max-lg:py-3 group">
                <button
                  className="flex items-center font-bold nav-link header-text gap-1 relative group text-black"
                  aria-haspopup="true"
                  type="button"
                >
                  About
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </button>
                <ul
                  className="
                    absolute left-1/2 top-full mt-2 -translate-x-1/2
                    z-50 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/10
                    py-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transform scale-95 group-hover:scale-100
                    transition-all duration-200 origin-top
                  "
                >
                  <li>
                    <Link
                      href="/about"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        rounded-t-xl
                        transition-colors duration-150
                      "
                      onClick={handleLinkClick} // Added handleLinkClick here
                    >
                      About Tabla
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/Mission"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        rounded-b-xl
                        transition-colors duration-150
                      "
                      onClick={handleLinkClick} // Added handleLinkClick here
                    >
                      Our Mission
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/why-choose-us"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                  onClick={handleLinkClick} 
                >
                  Why Choose Us
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/contact"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                  onClick={handleLinkClick} 
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md rounded-b-lg max-w-5xl mx-auto px-6 py-4" aria-label="Mobile Navigation">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/franchise-investment" className="block font-bold text-black" onClick={handleLinkClick}>
                Investments
              </Link>
            </li>

            <li>
              <button
                onClick={() => setFranchiseOpen(!franchiseOpen)}
                className="flex items-center justify-between w-full font-bold text-black"
                aria-expanded={franchiseOpen}
                aria-controls="franchise-menu"
              >
                Franchise Model
                <ChevronDown className={`w-4 h-4 transition-transform ${franchiseOpen ? 'rotate-180' : ''}`} />
              </button>
              {franchiseOpen && (
                <ul id="franchise-menu" className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                  <li>
                    <Link href="/franchiese-model/fine-dining-franchise" className="block text-gray-700" onClick={handleLinkClick}>
                      Fine Dine
                    </Link>
                  </li>
                  <li>
                    <Link href="/franchiese-model/fast-casual-franchise " className="block text-gray-700" onClick={handleLinkClick}>
                      Fast Casual
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/blogs" className="block font-bold text-black" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>

            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full font-bold text-black"
                aria-expanded={aboutOpen}
                aria-controls="about-menu"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <ul id="about-menu" className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                  <li>
                    <Link href="/about" className="block text-gray-700" onClick={handleLinkClick}>
                      About Tabla
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/Mission" className="block text-gray-700" onClick={handleLinkClick}>
                      Our Mission
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/why-choose-us" className="block font-bold text-black" onClick={handleLinkClick}>
                Why Choose Us
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block font-bold text-black" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
