import React, { useEffect, useRef } from "react";
import TextSlider from "../textSlider/textSlider";


function Intro() {
  return (
    <>
      <div>
        <a href="/" className="text-center">
          <img
            className=" w-[100px] h-[100px] fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[10%] z-20"
            src="/svg/logo-no-background.svg"
            alt=""
          />
        </a>
        <a href="/booking">
          <button className="fixed lg:block hidden top-[20%] right-[3%] z-20 lg:top-[10%] text-golden hover:text-red-400 text-2xl border-t-2 border-b-2 border-yellow-300 font-Playfair hover:border-red-500 transition-all ease-linear duration-300 ">
            Reservation
          </button>
        </a>
      </div>
      <div className="relative">
        <video
          src="/videos/video1.mp4"
          muted
          loop
          className=" object-cover min-h-[100vh] z-0 w-[100%]"
          autoPlay={true}
        ></video>
        <TextSlider />
      </div>
    </>
  );
}
export default Intro;
