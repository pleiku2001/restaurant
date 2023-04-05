import { motion } from "framer-motion";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
    exit: {},
  };
};

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ amount:"all" }}
        // className={`  relative `}
      >
        <span className="hash-span" id={idName}>
          {/* &nbsp; */}
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
