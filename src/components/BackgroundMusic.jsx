import React, { useEffect, useRef } from "react";
import music from "../assets/birthday.mp3";

function BackgroundMusic() {

  const audioRef = useRef(null);

  useEffect(() => {

    const startMusic = () => {

      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Music could not start:", error);
        });
      }

      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
    };

  }, []);

  return (
    <audio
      ref={audioRef}
      src={music}
      loop
      preload="auto"
    />
  );
}

export default BackgroundMusic;