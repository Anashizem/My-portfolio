import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (

<ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[700px]"
        particlesOptions={heroOptions}
      />

      );
};

export default HeroParticles;
