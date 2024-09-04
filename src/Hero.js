import React from "react";
import ReactPlayer from "react-player";
import StrollsTrailer from "./StrollsTrailer.mp4";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="Hero">
      <ReactPlayer
        url={StrollsTrailer}
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="video-player"
      />
      ;
    </section>
  );
}
