import { projects } from "./constants";
import { motion } from "framer-motion";
import {ProjectCard , SectionWrapper } from './utils/motion';


const Work = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 z-10">
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