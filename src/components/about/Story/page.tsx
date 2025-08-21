import React from "react";

const Story = () => {
  return (
    <section className=" bg-white py-20 sm:py-20 md:py-24 overflow-hidden">
      <div className=" py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Video Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-full max-w-[700px] h-0 pb-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0 object-cover shadow-2xl"
                src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1752001103/Franchise_Video_3.2_1_1_vvhfny.mp4"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title="Franchise Video"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-5xl font-semibold text-red-800 mb-6 leading-tight">
              Our Story
            </h2>
            <p className="text-lg lg:text-xl text-black mb-6">
              We started Tabla in 2008 with a vision to bring authentic and high-quality Indian food to our hometown, Orlando.
            </p>
            <blockquote className="bg-white p-6 rounded-lg shadow-md mb-6">
              <p className="text-lg lg:text-xl text-black italic">
  &quot;What began as a local restaurant quickly became a community favorite. Later, we added a ballroom to allow guests a welcoming space to meet, celebrate, and create memories over delicious food.&quot;
</p>

              <footer className="mt-4 text-right text-gray-800 font-medium">
                — Anshu Jain
                <br />
                <span className="text-red-800">CEO & Founder</span>
              </footer>
            </blockquote>
            <p className="text-lg lg:text-xl text-black mb-6 leading-relaxed max-w-2xl mx-auto">
              The passion and drive to take <strong>Tabla</strong> to the next step—closer to the dream of becoming a franchise and evolving as a company. What started as a way to serve a city is now a mission to serve the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
