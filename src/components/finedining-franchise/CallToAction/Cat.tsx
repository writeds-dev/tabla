import React from 'react';
const CallToAction = () => {
  return (
    <div>
     <section
  className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/FineDine/cocktail.webp')" }}
  aria-label="Franchise video showcasing fine-dining Indian restaurant experience"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#5f0f0f]/80 backdrop-blur-sm" aria-hidden="true" />
  
  {/* Right Column - Video Background */}
 <div className="absolute inset-0">
  <video
    src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1752000099/copy_2763A544-F10D-48C1-8BC7-6279A1C7C4F0_zvtaax.mp4"
    title="Fine-dining Indian restaurant franchise"
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    aria-describedby="video-caption"
  />
  <p id="video-caption" className="sr-only">
    A video showcasing the fine-dining experience at Tabla restaurant, highlighting the ambiance and diverse menu offerings of the franchise.
  </p>
</div>

</section>
    </div>
  );
};
export default CallToAction;
