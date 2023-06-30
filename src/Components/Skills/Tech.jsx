import { BallCanvas } from './canvas';
import { technologies } from './Constants';
import { textVariant } from './utils/motion';
import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';

const Tech = () => {
  return (
    <>

      <div className="flex flex-wrap justify-center gap-10 z-10" >
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