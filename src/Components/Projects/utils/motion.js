import { Tilt } from "react-tilt";
import { BsGithub ,BsFileEarmarkCodeFill } from "react-icons/bs";
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

  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
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
  
  export const ProjectCard = ({ index, name, description, image, source_code_link, }) => {
    return (
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 40,
            scale: 1,
            speed: 450
          }}
          className='rounded-lg md:w-[300px] w-full'
          >
          <div
            className="relative w-full h-[250px]"
          >
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
            >
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <BsGithub size={30} color="black" />
              </div>
            </div>
          </div>
  
          <div className="mt-3" >
            <h3 className="text-red-600 font-bold font-beckman text-[27px]">{name}</h3>
            <p className="mt-2 text-white text-[17px] leading-[20px]">{description}</p>
          </div>
          <div 
            className="mt-3 flex justify-center items-center "
          >
            <a 
              className="m-3 p-2 w-[60%] font-beckman text-[18px] bg-white rounded-lg flex justify-between text-red-600 hover:bg-red-600 hover:text-white"
              href={source_code_link}
              target='_blank'
            >
              See the code
              <BsFileEarmarkCodeFill size={25}/>
            </a>
          </div>
        </Tilt>
      </motion.div>
    )
  }; 
  export const SectionWrapper = (Component, idName) => 
    function HOC() {
      return (
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-6xl mx-auto relative z-0 `}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      )
    };
    