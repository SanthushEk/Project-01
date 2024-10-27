import React from 'react';

const VideoSection = () => {
  return (
    <div className="flex items-center justify-center pb-20">
      <div className="relative w-full max-w-[1400px] px-4"> 
        <iframe
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg"
          src="https://www.youtube.com/embed/6v6dbxPlsXs" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
