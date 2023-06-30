import { motion } from "framer-motion";
import { styles } from '../styles'

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  export const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`max-w-6xl mx-auto relative z-0 `}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  };
    export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };