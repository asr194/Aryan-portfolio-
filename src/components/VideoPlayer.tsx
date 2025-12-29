'use client';

import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer = ({ src, title }: VideoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Load video when it comes into view
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video && inView) {
      const handleCanPlay = () => {
        setIsLoaded(true);
        setHasError(false);
        video.play().catch((error) => {
          console.log('Autoplay failed:', error);
        });
      };

      const handleError = () => {
        setHasError(true);
        setIsLoaded(false);
        console.error('Video failed to load:', src);
      };

      const handleLoadStart = () => {
        setIsLoaded(false);
        setHasError(false);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('loadstart', handleLoadStart);

      // Start loading
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, [inView, src]);

  return (
    <div 
      ref={inViewRef}
      className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden"
    >
      {/* Loading or Error state */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 z-10">
          <div className="text-center p-6">
            {hasError ? (
              <>
                <div className="text-red-500 text-4xl mb-3">⚠️</div>
                <p className="text-gray-600 font-medium text-sm">
                  Video failed to load
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Check file format and size
                </p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 border-3 border-pink-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-gray-600 font-medium text-sm">
                  Loading {title}...
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Simple title overlay */}
      {isLoaded && !hasError && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
            <h3 className="text-white font-semibold text-sm">{title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;