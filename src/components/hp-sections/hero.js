/** @jsx jsx */
import React, { useState } from "react"; // eslint-disable-line
import { Link } from "gatsby";
import { Container, jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import ModalVideo from "react-modal-video";
import HeroVideoBg from "./hero-video-bg";

import { FaPlay, FaCalendar, FaChevronRight } from "react-icons/fa";

import VideoPoster from "../../images/rambling-pines-camp-intro-video.jpg";
import BigLogo from "../../images/rambling-pines-art-logo.png";

import "../../../node_modules/react-modal-video/css/modal-video.min.css";

const Hero = () => {
  const [playFullVideo, setPlayFullVideo] = useState(false);
  return (
    <Box
      as="section"
      pt={[6, 5, 5, 5, 6]}
      pb={[4, 5, 5, 6]}
      mt={5}
      sx={{
        textAlign: "center",
        borderBottom: "1px solid lightgrey",
        position: "relative",
        zIndex: "1",
        bg: "primaryLight",
        backgroundImage: `url('${VideoPoster}')`,
        backgroundSize: "cover",
        backgroundPosition: "top right"
      }}
      className="Hero"
    >
      <div
        sx={{
          bg: "rgba(0,0,0,.3)",
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <div
        sx={{
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <HeroVideoBg
          playFullVideo={playFullVideo}
          poster="https://rbpvideo-ac97.kxcdn.com/rambling-pines-camp-intro-video.jpg"
        />
      </div>
      <Container
        className="container"
        sx={{
          maxWidth: "5xl",
          position: "relative",
          zIndex: 10
          // my: [3, 4, 4, 3, 5]
          // bg: 'rgba(0,0,0,.32)'
        }}
      >
        <img src={BigLogo} alt="Rambling Pines Big Logo" />
        <Styled.h1
          sx={{
            textTransform: "lowercase",
            color: "white",
            fontWeight: "normal",
            textShadow: "2px 2px 2px rgba(0,0,0,.5)",
            fontSize: [3, 4],
            fontFamily: "Lato",

            mb: 0
          }}
        >
          A Summer Day Camp Like no Other.
        </Styled.h1>
        <p
          sx={{
            textShadow: "1px 1px 2px rgba(0,0,0,.5)",
            fontSize: [1, 2],
            color: "light",
            fontFamily: "Dosis",
            fontWeight: "light",
            mt: 0
          }}
        >
          Your kids deserve the best. The best supervision, the best activities, the best friends,
          the best memories.{" "}
        </p>

        <div sx="display: 'flex', flexWrap: 'wrap', justifyContent: 'center'">
          <button
            onClick={() => setPlayFullVideo(true)}
            sx={{
              variant: "buttons.3D",
              display: "inline-block",
              py: 3,
              mt: 4,
              mr: 3
            }}
          >
            <FaPlay sx={{ position: "relative", top: "2px" }} /> &nbsp; Watch our Full Video
          </button>
          <ModalVideo
            autoplay="1"
            isOpen={playFullVideo}
            videoId="5rbAeDbueSA"
            onClose={() => setPlayFullVideo(!setPlayFullVideo)}
          />
          <a
            sx={{ variant: "buttons.3DAccent", display: "inline-block", mr: 3 }}
            href="https://calendly.com/ramblingpines/camp-tour"
            target="_blank"
          >
            <FaCalendar sx={{ position: "relative", top: "2px" }} /> Schedule a Tour
          </a>
          <a
            sx={{ variant: "buttons.3D", display: "inline-block" }}
            href="https://ramblingpines.campintouch.com/ui/forms/application/camper/App"
            target="_blank"
          >
            <FaChevronRight sx={{ position: "relative", top: "2px" }} /> Enroll Now
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
