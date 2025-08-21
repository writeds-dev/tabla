'use client';

import React, { useRef, useState, useEffect } from 'react';
import './index.scss';
import {
  Award,
  Building2,
  MapPin,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  label: string;
  date: string;
  labelColor: string;
}

const events: TimelineEvent[] = [
  {
    year: '2008',
    title: 'First Restaurant in Orlando, FL',
    description:
      "Founders Anshu & Nora Jain opened what is called Tabla Indian Cuisine. It was much more than a mere restaurant—really a warm invitation into the world of true Indian hospitality.",
    label: 'A Humble Beginning – Orlando, FL',
    date: '2008',
    labelColor: 'bg-blue-200 text-blue-800',
  },
  {
    year: '2009',
    title: 'Expanding the Heart, Expanding the Menu',
    description:
      'Tabla soon started catering birthdays, weddings, and family celebrations. Guests would ask, and we would answer.',
    label: 'Answering the Call – Event Catering Begins',
    date: '2009',
    labelColor: 'bg-yellow-200 text-yellow-800',
  },
  {
    year: '2012',
    title: 'Nationwide, Across Continental U.S.',
    description:
      'Tabla gets invited to serve clients across the U.S., proving that good food knows no boundaries.',
    label: 'Coast to Coast – Serving the Nation',
    date: '2012',
    labelColor: 'bg-green-200 text-green-800',
  },
  {
    year: '2020',
    title: 'Second Restaurant in Winter Park, FL',
    description:
      'Tabla opened its second restaurant in Winter Park, sharing its flavor and love with a new community.',
    label: 'Second Location – Winter Park, FL',
    date: '2020',
    labelColor: 'bg-purple-200 text-purple-800',
  },
  {
    year: '2021',
    title: 'Third Restaurant in Lake Nona, FL',
    description:
      'Following the same values that started it all — quality, connection, and care — Tabla opened its third restaurant.',
    label: 'Third Location – Lake Nona, FL',
    date: '2021',
    labelColor: 'bg-purple-200 text-purple-800',
  },
  {
    year: '2022',
    title: 'Fourth Restaurant in Oviedo, FL',
    description:
      'Another Tabla location was opened. With each new door, more hearts are touched.',
    label: 'Fourth Location – Oviedo, FL',
    date: '2022',
    labelColor: 'bg-purple-200 text-purple-800',
  },
  {
    year: '2024',
    title: 'Franchising Launch',
    description:
      'Tabla launched its franchising journey, welcoming new partners into the family.',
    label: 'A New Era – Franchising Launch',
    date: '2024',
    labelColor: 'bg-teal-200 text-teal-800',
  },
  {
    year: '2025',
    title: 'A Flavorful Future Begins',
    description:
      'Fifth Restaurant: Fort Worth, TX (Jan)\nSixth: Fast Casual Orlando, FL (Mar)\nSeventh: Schaumburg, IL (May)\nUpcoming: Atlanta, Minneapolis, Grapevine, Naperville, Clermont, Irving, Richmond, Louisville, Tampa, Houston, Boston, Old Bridge.',
    label: 'Multi-State Expansion',
    date: '2025',
    labelColor: 'bg-orange-200 text-orange-800',
  },
];

const labelIcons: Record<string, React.ReactNode> = {
  'A Humble Beginning – Orlando, FL': (
    <Building2 className="w-8 h-8 text-blue-600 mb-4" />
  ),
  'Answering the Call – Event Catering Begins': (
    <TrendingUp className="w-8 h-8 text-yellow-600 mb-4" />
  ),
  'Coast to Coast – Serving the Nation': (
    <MapPin className="w-8 h-8 text-green-600 mb-4" />
  ),
  'Second Location – Winter Park, FL': (
    <Rocket className="w-8 h-8 text-purple-600 mb-4" />
  ),
  'Third Location – Lake Nona, FL': (
    <Users className="w-8 h-8 text-teal-600 mb-4" />
  ),
  'Fourth Location – Oviedo, FL': (
    <Award className="w-8 h-8 text-orange-600 mb-4" />
  ),
  'A New Era – Franchising Launch': (
    <Building2 className="w-8 h-8 text-blue-600 mb-4" />
  ),
  'Multi-State Expansion': (
    <TrendingUp className="w-8 h-8 text-yellow-600 mb-4" />
  ),
};

const HorizontalTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section
      className="w-full bg-white  py-16 relative"
      aria-labelledby="timeline-section"
    >
      <div className="max-w-5xl mx-auto text-center mb-14 px-4">
        <h2 id="timeline-section" className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Growth & <span className="text-red-700">Awards</span>
        </h2>
        <div className="h-1 w-24 bg-red-600 rounded-full mt-4 mx-auto" />
      </div>

      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-800 text-white p-4 rounded-full shadow-lg z-20 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          aria-label="Scroll Left"
          role="button"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-800 text-white p-4 rounded-full shadow-lg z-20 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          aria-label="Scroll Right"
          role="button"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scrollbar-hide"
        aria-live="polite"
        role="region"
        aria-labelledby="timeline-section"
      >
        <div className="relative flex gap-10 w-max pb-32">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group snap-center relative bg-white z-10 rounded-2xl shadow-lg w-[85vw] sm:w-[400px] lg:w-[440px] px-6 pt-10 pb-16 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col items-center"
              aria-labelledby={`event-${idx}`}
              role="article"
            >
              {/* Top Icon */}
              <div>
                {labelIcons[event.label] || (
                  <Sparkles className="w-8 h-8 text-gray-500 mb-4" />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-md px-3 py-1 rounded-full font-semibold mb-4 ${event.labelColor}`}
              >
                {event.label}
              </span>

              {/* Title */}
              <h4
                id={`event-${idx}`}
                className="text-lg font-bold text-gray-800 text-center mb-2 leading-snug relative"
              >
                {event.title}
                <span className="block w-10 h-[2px] bg-orange-500 mt-2 mx-auto rounded-full" />
              </h4>

              {/* Description */}
              <p className="text-md text-gray-700 bg-white border-l-4 border-orange-400 px-6 py-4 mt-2 rounded-md shadow-sm leading-relaxed whitespace-pre-line">
                {event.description}
              </p>

              {/* Year Badge */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg
                    className="absolute w-full h-full group-hover:animate-spin-slow"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#000"
                      strokeWidth="4"
                      strokeDasharray="6 10"
                    />
                  </svg>

                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white font-bold text-lg shadow-xl ring-4 ring-white z-10">
                    <div className="absolute inset-0 rounded-full animate-pulse border-4 border-red-300 opacity-30" />
                    {event.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
