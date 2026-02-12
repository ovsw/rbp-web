import React from "react";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";

const MUX_PLAYBACK_ID = process.env.GATSBY_MUX_HP_HERO_PLAYBACK_ID || "";

const HeroVideoBg = () => {
  if (!MUX_PLAYBACK_ID) {
    return null;
  }

  const src = `https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8`;
  const posterUrl = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=0`;

  return (
    <MuxBackgroundVideo src={src} maxResolution="1080p">
      <img src={posterUrl} alt="" />
    </MuxBackgroundVideo>
  );
};

export default HeroVideoBg;
