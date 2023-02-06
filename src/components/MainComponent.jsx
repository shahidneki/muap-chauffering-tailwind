import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Offers from "./Offers";
import Plan from "./Plan";
import Testimonials from "./Testimonials";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import abstractVideo from '../assets/background.mp4'

const MainComponent = () => {
    return (
      <div className="relative w-full">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          src={abstractVideo}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-black/70">
        {/* <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#14ffe0]/50"> */}
          <Navbar />
          <Hero />
          <Plan />
          <Testimonials />
          <ImageSlider />
          <Footer />
        </div>
      </div>
    );
  };

export default MainComponent;