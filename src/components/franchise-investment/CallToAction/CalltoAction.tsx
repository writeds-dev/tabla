import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function InvestmentCTASection() {
  return (
    <section
      className="relative bg-black text-white md:min-h-[450px] md:pt-30 py-12 overflow-hidden px-4 sm:px-8 md:px-16 max-w-3xl mx-auto text-center max-w-full"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/Investment/finedine.webp"
          alt="Franchise investment opportunity"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
          aria-describedby="cta-image-description"
        />
        <div className="absolute inset-0 bg-[#892430]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10">
        {/* Main Heading */}
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug"
        >
          Join a brand that values authenticity and unforgettable guest experiences.
        </h2>

        {/* Description Text */}
        <p id="cta-description" className="text-lg opacity-90 mb-6">
          Ready to take the first step? Contact us today to schedule a consultation and start your Tabla journey!
        </p>

        {/* Contact Button */}
        <Link href="/contact" passHref>
          <button
            className="inline-flex items-center cursor-pointer gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#7D0C0C] hover:bg-[#600808] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            aria-label="Contact Us"
            title="Click to contact us for more information about franchise investment"
          >
            <Mail size={20} aria-hidden="true" />
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
