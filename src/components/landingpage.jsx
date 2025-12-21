import { Blocks } from "react-loader-spinner";
import { About } from "./about";
import { Contactus } from "./contactus";
import { HeroSection } from "./Herosection";
import { Project } from "./project";
import { Services } from "./Service";
import { Testinomial } from "./testimoial";
import { useEffect, useState } from "react";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Project />
      <Testinomial />
      <Contactus />
    </>
  );
};
