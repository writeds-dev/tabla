"use client"
import { useState, useEffect } from 'react';

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000); // 3000ms = 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [imageUrls.length]);
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Display current image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default ImageSlider;
