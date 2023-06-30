import { textVariant } from './utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';


function SkillsTitle() {
  return (
    <motion.div variants={textVariant()}>
    <div className='flex flex-col w-full gap-3 z-10'>
      <h1 className='text-7xl font-bold text-red-500'>My skills</h1>
      <h2 className='text-white text-5xl'>Technologies</h2>
    </div>
  </motion.div>
)
}

export default SectionWrapper(SkillsTitle,"")