"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  duration?: number; // Duration for each slide transition in ms
}

const FineDiningImageSlider: React.FC<ImageSliderProps> = ({ images, duration = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Current active slide
  const [fadeIn, setFadeIn] = useState(true); // Control fade-in/fade-out effect

  // Change slide every 'duration' ms
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Trigger fade-out

      setTimeout(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); // Trigger fade-in after slide change
      }, 500); // Delay before changing the slide to allow fade-out effect
    }, duration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length, duration]);

  return (
    <div className="relative w-full h-[500px]">
      <div
        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={images[currentSlide]}
          alt={`Fine Dining Slide ${currentSlide + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? 'opacity-100' : ''
            }`}
            onClick={() => {
              setFadeIn(false); // Trigger fade-out effect when manually changing slide
              setTimeout(() => {
                setCurrentSlide(index);
                setFadeIn(true); // Trigger fade-in after slide change
              }, 500); // Add delay to sync with fade effect
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FineDiningImageSlider;
