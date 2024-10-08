import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FlipWords } from "./ui/FlipWords";

const Hero = () => {
  const words = ['ReactJS','NextJS','ExpressJS','NodeJS','Typescript','Javascript'];
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with nextJS
          </h2>
          {/* <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          /> */}
          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl my-10 font-bold tracking-wide">
            Developing dynamic and eye catching websites with <FlipWords words={words} />
          </h1>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-3xl">
            Hi I am <span className="font-bold text-purple">Divyansh</span>, a <span className="text-purple">MERN</span> Stack and <span className="text-purple">NextJS</span> Developer
          </p>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
