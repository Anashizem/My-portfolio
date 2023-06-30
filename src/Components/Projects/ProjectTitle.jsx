import { motion } from "framer-motion";
import { textVariant , SectionWrapper} from './utils/motion_special';

function ProjectTitle() {
  return (
    <motion.div variants={textVariant()}>
    <div className='flex flex-col w-full gap-3 z-10 py-10 px-10 xl:px-0 '>
      <h1 className='text-7xl font-bold text-red-500 '>My work</h1>
      <h2 className='text-white text-5xl'>Projects</h2>
    </div>
  </motion.div>
)
}

export default SectionWrapper(ProjectTitle,"")