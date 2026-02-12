import React, { useEffect, useRef, useState } from "react";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";

const MUX_PLAYBACK_ID = process.env.GATSBY_MUX_HP_HERO_PLAYBACK_ID || "";

const HeroVideoBg = () => {
  const muxContainerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const muxContainerEl = muxContainerRef.current;
    if (!muxContainerEl) {
      return;
    }

    let videoEl = null;
    let observer = null;

    const markVideoReady = () => setIsVideoReady(true);

    const attachVideoListeners = (videoElement) => {
      if (!videoElement) {
        return false;
      }

      videoEl = videoElement;
      videoEl.addEventListener("loadeddata", markVideoReady);
      videoEl.addEventListener("canplay", markVideoReady);
      videoEl.addEventListener("playing", markVideoReady);

      // If metadata is already loaded, avoid an extra hidden frame.
      if (videoEl.readyState >= 2) {
        markVideoReady();
      }

      return true;
    };

    if (!attachVideoListeners(muxContainerEl.querySelector("video"))) {
      observer = new MutationObserver(() => {
        if (attachVideoListeners(muxContainerEl.querySelector("video"))) {
          observer.disconnect();
        }
      });

      observer.observe(muxContainerEl, { childList: true, subtree: true });
    }

    return () => {
      if (videoEl) {
        videoEl.removeEventListener("loadeddata", markVideoReady);
        videoEl.removeEventListener("canplay", markVideoReady);
        videoEl.removeEventListener("playing", markVideoReady);
      }

      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  if (!MUX_PLAYBACK_ID) {
    return null;
  }

  const src = `https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8`;
  const posterUrl = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=0`;

  return (
    <div
      className="hero-mux-video-bg"
      ref={muxContainerRef}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
    >
      <img
        src={posterUrl}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isVideoReady ? 0 : 1,
          transition: "opacity 180ms ease",
          pointerEvents: "none"
        }}
      />
      <MuxBackgroundVideo
        src={src}
        maxResolution="1080p"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: isVideoReady ? 1 : 0,
          transition: "opacity 180ms ease"
        }}
      />
      <style>{`
        .hero-mux-video-bg mux-background-video,
        .hero-mux-video-bg mux-background-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default HeroVideoBg;
