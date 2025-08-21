import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

interface Video {
  id: number;
  videoUrl: string;
  owner: string;
  franchiseLocation: string;
  description: string;
}
type Orientation = 'landscape' | 'portrait' | 'square' | null;

const isYouTube = (url: string) => /youtube\.com|youtu\.be/.test(url);

const videosData: Video[] = [
   {
    id: 1,
    videoUrl: 'https://res.cloudinary.com/dtmklzv0k/video/upload/v1755695134/3_test_neu07g.mp4',
    owner: 'Testimonial-3',
    franchiseLocation: 'San Francisco, USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    videoUrl: 'https://res.cloudinary.com/dtmklzv0k/video/upload/v1755788971/2_test_1_l4zeqn.mp4',
    owner: 'Testimonial-1',
    franchiseLocation: 'New York, USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 3,
    videoUrl: 'https://res.cloudinary.com/dtmklzv0k/video/upload/v1755788975/1_Test_1_nokttl.mp4',
    owner: 'Testimonial-2',
    franchiseLocation: 'Los Angeles, USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
 
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/unv7G0LGkuQ',
    owner: 'Testimonial-4',
    franchiseLocation: 'San Francisco, USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const Testimonial: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [orientations, setOrientations] = useState<Record<number, Orientation>>({});

  const scrollLeft = () => sliderRef.current && (sliderRef.current.scrollLeft -= 300);
  const scrollRight = () => sliderRef.current && (sliderRef.current.scrollLeft += 300);

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const playVideo = async (id: number) => {
    // Pause all others
    Object.entries(videoRefs.current).forEach(([vid, ref]) => {
      if (Number(vid) !== id && ref && !ref.paused) ref.pause();
    });

    const current = videoRefs.current[id];
    if (current) {
      try {
        await current.play();
        setPlayingId(id);
      } catch {
        // Autoplay might fail silently
      }
    }
  };

  const togglePlay = (id: number) => {
    const v = videoRefs.current[id];
    if (!v) return;
    if (v.paused) playVideo(id);
    else {
      v.pause();
      if (playingId === id) setPlayingId(null);
    }
  };

  const handleMeta = (id: number) => {
    const v = videoRefs.current[id];
    if (!v) return;
    const { videoWidth, videoHeight } = v;

    let o: Orientation = null;
    if (videoWidth && videoHeight) {
      if (videoWidth > videoHeight) o = 'landscape';
      else if (videoWidth < videoHeight) o = 'portrait';
      else o = 'square';
    }
    setOrientations((prev) => ({ ...prev, [id]: o }));
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idAttr = (entry.target as HTMLElement).dataset['vid'];
          const id = idAttr ? Number(idAttr) : null;
          if (!id) return;

          const v = videoRefs.current[id];
          if (!entry.isIntersecting && v && !v.paused) {
            v.pause();
            if (playingId === id) setPlayingId(null);
          }
        });
      },
      { root: sliderRef.current, threshold: 0.3 }
    );

    const nodes = sliderRef.current.querySelectorAll('[data-vid]');
    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, [playingId]);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          What <span className="text-red-800">Partners</span> Say About{' '}
          <span className="text-red-800">Our Franchise</span>
        </h2>

        {/* Slider */}
        <div className="relative flex items-center">
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto pb-6 snap-x scroll-smooth"
          >
            {videosData.map((video) => {
              const o = orientations[video.id];
              const aspectClass = isYouTube(video.videoUrl)
                ? 'aspect-video'
                : o === 'portrait'
                ? 'aspect-[9/16]'
                : o === 'square'
                ? 'aspect-square'
                : 'aspect-video';

              return (
                <div
                  key={video.id}
                  data-vid={video.id}
                  className="min-w-[300px] md:min-w-[420px] p-5 bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 snap-start"
                >
                  {/* Video Box */}
                  <div className={`${aspectClass} w-full relative bg-black rounded-t-lg overflow-hidden`}>
                    {!isYouTube(video.videoUrl) ? (
                      <>
                       <video
  ref={(el) => {
    videoRefs.current[video.id] = el;
  }}
  className={`absolute inset-0 w-full h-full ${
    o === 'portrait' ? 'object-contain' : 'object-cover'
  }`}
  src={video.videoUrl}
  playsInline
  onLoadedMetadata={() => handleMeta(video.id)}
  onClick={() => openModal(video)}
/>
                        <button
                          aria-label="Play"
                          className={`absolute inset-0 m-auto flex items-center justify-center text-white text-3xl rounded-full w-16 h-16 bg-black/50 backdrop-blur-sm transition ${
                            videoRefs.current[video.id]?.paused ? 'opacity-100' : 'opacity-0 pointer-events-none'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay(video.id);
                          }}
                        >
                          ▶
                        </button>
                      </>
                    ) : (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`${video.videoUrl}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                        title={video.owner}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{video.owner}</h3>
                    <p className="text-gray-500 text-sm">{video.franchiseLocation}</p>
                    <p className="mt-3 text-gray-700 text-xs md:text-sm">{video.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div
            className="absolute top-1/2 left-[-40px] -translate-y-1/2 p-2 hidden md:block"
            onClick={scrollLeft}
          >
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-800 text-white">
              &lt;
            </button>
          </div>
          <div
            className="absolute top-1/2 right-[-40px] -translate-y-1/2 p-2 hidden md:block"
            onClick={scrollRight}
          >
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-800 text-white">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative bg-white p-3 md:p-6 w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 shadow-xl rounded-xl">
            <button
              className="absolute -top-7 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-red-800 text-white text-3xl"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="aspect-video w-full relative bg-black overflow-hidden">
              {!isYouTube(selectedVideo.videoUrl) ? (
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${selectedVideo.videoUrl}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                  title="Full Video"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
