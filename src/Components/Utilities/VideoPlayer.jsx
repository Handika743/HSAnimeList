"use client";

import { useState, useEffect, useCallback } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [opts, setOpts] = useState({ width: "150", height: "200" });

  const updateVideoSize = useCallback(() => {
    const isLargeScreen = window.innerWidth >= 768;
    const newOpts = isLargeScreen
      ? { width: "250", height: "300" }
      : { width: "150", height: "200" };

    setOpts((prev) => {
      if (prev.width !== newOpts.width || prev.height !== newOpts.height) {
        return newOpts;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateVideoSize();
      window.addEventListener("resize", updateVideoSize);
      return () => window.removeEventListener("resize", updateVideoSize);
    }
  }, [updateVideoSize]);

  return (
    <div className="border-2 border-color-accent rounded-lg overflow-hidden">
      <Youtube
        key={`${opts.width}x${opts.height}`} // 🔑 kunci mencegah error
        videoId={youtubeId}
        opts={opts}
        onReady={(event) => event.target.pauseVideo()}
        onError={() => alert("Video is broken, please try another.")}
      />
    </div>
  );
};

export default VideoPlayer;
