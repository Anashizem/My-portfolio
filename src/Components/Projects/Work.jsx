import { projects } from "./constants";
import { motion } from "framer-motion";
import { textVariant  , ProjectCard , SectionWrapper } from './utils/motion';


const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='flex flex-col w-full gap-3'>
          <h1 className='text-7xl font-bold text-red-500 '>My work</h1>
          <h2 className='text-white text-5xl'>Projects</h2>
        </div>
      </motion.div>

      <div className="mt-64 flex gap-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
        </div>  
    </>
  );
};

export default SectionWrapper(Work, "");