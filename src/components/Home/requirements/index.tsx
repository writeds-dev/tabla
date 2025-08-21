import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Feature {
  title: string;
  description: string | (() => string);
  bg: string;
}

interface FinancialData {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  features: Feature[];
  ctaText: string;
  ctaHref: string;
}

interface Props {
  content: FinancialData;
}

const Requirement = ({ content }: Props) => {
  return (
    <section
      className="bg-white px-4 sm:px-6 lg:px-12 py-24"
      aria-labelledby="requirement-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        
        {/* Left Content */}
        <article>
          <h2
            id="requirement-heading"
            className="text-4xl sm:text-5xl font-bold text-black mb-6"
            tabIndex={0} // Allow screen readers to focus on the heading
          >
            {content.heading}
          </h2>

          <p
            className="text-gray-700 text-lg leading-relaxed mb-8"
            id="requirement-description"
            aria-describedby="requirement-description"
          >
            {content.description}
          </p>

          <figure className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-72">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className="object-cover"
              priority
            />
            <figcaption className="sr-only">{content.image.alt}</figcaption>
            <div className="absolute inset-0 bg-black/20" />
          </figure>
        </article>

        {/* Right Features */}
        <aside className="space-y-8">
        <ul className="space-y-6">
  {content.features.map((item, idx) => (
    <li
      key={idx}
      className="flex items-start gap-4 p-5 rounded-xl shadow-md bg-white"
      aria-labelledby={`feature-${idx}`}
    >
      <div
        className={`p-3 rounded-full shadow-md ${item.bg}`}
        aria-hidden="true"
      />
      <div>
        <h3
          id={`feature-${idx}`}
          className="text-lg text-black font-semibold"
          tabIndex={0}
        >
          {item.title}
        </h3>
        <p className="mt-1 text-lg sm:text-md text-black">
          {typeof item.description === "string"
            ? item.description
            : item.description()}
        </p>
      </div>
    </li>
  ))}
</ul>


          <div className="pt-6">
           <Link
  href={content.ctaHref}
  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-semibold rounded-lg transition duration-200 shadow-md"
  aria-label={`Go to ${content.ctaText}`}
>
  {content.ctaText}
</Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Requirement;
