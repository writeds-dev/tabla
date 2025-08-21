"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  duration?: number;
}

const FastCasualImageSlider: React.FC<ImageSliderProps> = ({ images, duration = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      handleChange((currentSlide + 1) % images.length, 'next');
    }, duration);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentSlide, images.length, duration]);

  // Slide change handler
  function handleChange(index: number, direction: 'next' | 'prev') {
    if (animating || index === currentSlide) return;
    setSlideDirection(direction);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimating(false);
    }, 400); // Animation duration
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="w-full h-full relative">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`
              absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
              ${idx === currentSlide
                ? 'z-20'
                : 'z-10 pointer-events-none'}
              ${
                idx === currentSlide
                  ? 'translate-x-0'
                  : slideDirection === 'next'
                  ? 'translate-x-full'
                  : '-translate-x-full'
              }
            `}
            style={{ transition: animating ? 'transform 0.5s cubic-bezier(.4,0,.2,1)' : 'none' }}
          >
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === currentSlide}
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full bg-white opacity-60 ring-2 ring-transparent ${
              currentSlide === idx ? 'opacity-100 ring-[#E50914]' : ''
            }`}
            onClick={() => handleChange(idx, idx > currentSlide ? 'next' : 'prev')}
            disabled={animating}
          />
        ))}
      </div>
    </div>
  );
};

export default FastCasualImageSlider;
