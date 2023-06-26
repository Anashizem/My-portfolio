import { BallCanvas } from './canvas';
import { technologies } from './Constants';
import { textVariant } from './utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='flex flex-col w-full gap-3'>
          <h1 className='text-7xl font-bold text-red-500'>My skills</h1>
          <h2 className='text-white text-5xl'>Technologies</h2>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '')