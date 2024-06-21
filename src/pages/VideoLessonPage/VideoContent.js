import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

const isYouTubeUrl = (url) => {
  return url.includes('youtube.com/watch') || url.includes('youtu.be');
}

const VideoContent = ({ lesson, onPrevious, onNext }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isYouTubeUrl(lesson.videoUrl)) {
      // Initialize video.js player
      if (videoRef.current) {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
        playerRef.current = videojs(videoRef.current, {
          controls: true,
          autoplay: false,
          preload: 'auto',
          techOrder: ['youtube'],
          sources: [{
            src: lesson.videoUrl,
            type: 'video/youtube'
          }]
        });
      }
    }

    // Cleanup on component unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [lesson]);

  return (
    <div className="video-content">
      <h1>{lesson.title}</h1>
      <div className="video-wrapper">
        {isYouTubeUrl(lesson.videoUrl) ? (
          <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin" playsInline></video>
          </div>
        ) : (
          <iframe
            width="560"
            height="315"
            src={lesson.videoUrl}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="navigation">
        <button onClick={onPrevious} disabled={!lesson.previous}>
          <FaArrowLeft /> Aula Anterior
        </button>
        <button onClick={onNext} disabled={!lesson.next}>
          Próxima Aula <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default VideoContent;
