"use client";

import { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set the default volume
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} autoPlay loop>
        <source src="/always-with-me.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleMute}
        className={`p-2 rounded-full text-neutral-800 cursor-pointer bg-pink-200
        }`}
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
}
