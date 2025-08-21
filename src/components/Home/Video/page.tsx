// components/Home/VideoSection.tsx
import React from 'react';
import Link from 'next/link';

export interface VideoContent {
  heading: string;
  highlight: string;
  description: string;
  videoUrl: string;
  ctaText: string;
  ctaHref: string;
}

interface Props {
  content: VideoContent;
}

const VideoSection: React.FC<Props> = ({ content }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
          {content?.heading || 'Discover the Opportunity'}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-black font-medium mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          {content?.description || 'An exciting opportunity to grow your business and reach new heights in the market.'}
        </p>
        {content?.videoUrl && (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow-xl border border-gray-200 mb-10">
            <iframe
              title="Video Overview"
              src={content.videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {content?.ctaHref && content?.ctaText && (
          <Link
            href={content.ctaHref}
            className="inline-block bg-red-800 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            {content.ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
