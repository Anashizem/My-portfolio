import transphoto from "./transphoto.png"
import { FiArrowDownCircle } from 'react-icons/fi';
import resume from "./CV.pdf"
import Typewriter from "typewriter-effect";
function HeroText() {
  return (
    <div className=" heroText h-5/6 w-full absolute">
      <div className=" max-h-screen-lg mx-auto flex flex-col items-center justify-center h-full px-20 ml-20 md:flex-row" >
        <div className="flex flex-col justify-center w-screen gap-3 ml-10 z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-red-500">
              <Typewriter 
                  onInit={(typewriter) => {
                      typewriter
                      .typeString("<span style='color: #Ffffff;'>I'am</span> Anas Hizem !")
                      .pauseFor(500)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
              />
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">I'm a software engineering student .</h2>
          <p className="text-white text-xl sm:text-2xl py-3 hidden lg:flex ">I've always been fascinated with technology , its ability to make life easier and now , I am able to turn that passion into a career path where I can use my skills to create innovative solutions. I am excited to share my journey with you and look forward to connecting with you soon !</p>
          <div className="z-10">
            <a download="CV.pdf" href={resume}
              className="flex justify-center items-center w-48 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-white focus:ring-1 hover:bg-red-600 text-black-500 hover:text-white duration-500"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
              <span className="text-sm font-medium sm:text-lg duration-100 font-beckman" id="repulse-span">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="-mr-10 z-10">
          <img
            src={transphoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroText