import { textVariant } from './utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';


function SkillsTitle() {
  const title = "My skills";

  return (
    <motion.div variants={textVariant()}>
    <div className='flex flex-col w-full gap-3 z-10 -mb-10'>
      <h1 className='text-7xl font-bold text-red-500'>          
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
      </h1>
      <h2 className='text-white text-5xl'>Technologies</h2>
    </div>
    
  </motion.div>
)
}

export default SectionWrapper(SkillsTitle,"")