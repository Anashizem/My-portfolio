import HeroParticles from "./Particles/HeroParticles";
import HeroText from "./HeroText"

const Hero = () => {
  return (
      <div name="About Me" className=" w-full flex justify-center items-center h-screen min-h-[800px]">
        <HeroText />
        <HeroParticles />
      </div>
  );
};

export default Hero;
