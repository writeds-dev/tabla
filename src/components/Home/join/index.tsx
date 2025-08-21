"use client";

import Image from "next/image";
import { useState } from "react";

export interface Marker {
  id: number;
  top: string;
  left: string;
  label: string;
}

export interface JoinContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  mapImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  markers: Marker[];
}

interface JoinProps {
  content: JoinContent;
}

export default function Join({ content }: JoinProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="join-us"
      className="bg-red-800 py-12"
      aria-label="Join Us and Growth Locations"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Map with Markers */}
        <div className="relative w-full max-w-full mx-auto img-order">
          <Image
            width={content.mapImage.width}
            height={content.mapImage.height}
            src={content.mapImage.src}
            alt={content.mapImage.alt}
            className="w-full h-auto rounded-lg"
            priority
          />
          {content.markers.map(({ id, top, left, label }) => (
            <button
              key={id}
              className="absolute cursor-pointer focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 rounded-full"
              style={{ top, left, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(id)}
              onBlur={() => setHovered(null)}
              aria-describedby={`tooltip-${id}`}  // Ensure tooltip exists with matching ID
              aria-label={label}
              type="button"
            >
              <span className="w-5 h-5 bg-lime-500 rounded-full border-2 border-white shadow-lg inline-block" />
              {hovered === id && (
                <div
                  id={`tooltip-${id}`} // Ensure tooltips with this ID exist
                  role="tooltip"
                  aria-live="polite"
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-md sm:text-md rounded px-3 py-1 whitespace-nowrap z-20 shadow-lg pointer-events-none"
                >
                  {label}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Info Section */}
        <div className="space-y-6 text-center md:text-left z-10 px-4 sm:px-0 content-order">
          <h2 className="text-4xl xl:text-5xl font-extrabold text-white ml-5 leading-tight">
            {content.title}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold ml-5 text-white leading-tight">
            {content.subtitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-lime-500">{content.subtitle.split(" ").slice(-1)}</span>
          </h3>
          <p className="text-lg sm:text-xl text-white ml-5 font-normal mx-auto md:mx-0 leading-relaxed">
            {content.description}
          </p>

          <div className="mt-8 ml-5">
            <a
              href={content.ctaHref}
              className="inline-block bg-green-900 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-800 transition"
            >
              {content.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
