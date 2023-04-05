import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
// import "./styles.css";
// import { Navbar } from "../components";
import {
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
function textSlider() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });
  //
  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 40,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 4000);

      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax overflow-hidden">
        <motion.div
          className="scroller text-8xl font-Bodoni text-golden flex flex-nowrap  uppercase"
          style={{ x }}
        >
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
          <span className="flex flex-nowrap w-[2800px] overflow-hidden">
            {children}{" "}
          </span>
        </motion.div>
      </div>
    );
  }
  //
  return (
    <section className="absolute bottom-[200px] left-0 ">
      <ParallaxText baseVelocity={-5} className="">
        Welcome to the most authentic place in VietNam.
      </ParallaxText>
      {/* <ParallaxText baseVelocity={5}>
        Welcome to the most authentic place in VietNam.
      </ParallaxText> */}
    </section>
  );
}

export default textSlider;
