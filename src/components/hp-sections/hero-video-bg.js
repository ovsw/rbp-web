import React, { useRef, useEffect } from 'react' // eslint-disable-line
import VideoCover from 'react-video-cover'

class HeroVideoBg extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.playFullVideo) {
      this.videoRef.pause()
    } else {
      this.videoRef.play()
    }
  }

  render () {
    const videoOptions = {
      src: 'https://rbpvideo-ac97.kxcdn.com/rambling-pines-camp-intro-video.mp4',
      autoPlay: true,
      loop: true,
      muted: true,
      poster: '',
      ref: videoRef => {
        this.videoRef = videoRef
      }

    }

    return (

      <VideoCover videoOptions={videoOptions} />

    )
  }
}

export default HeroVideoBg
