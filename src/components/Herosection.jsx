import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { use, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import hero_section from "../assets/hero_section.png";
import { motion } from "framer-motion";
export const HeroSection = () => {
  const container = useRef(null);
  const counterRef = useRef(null);
  const secondRef=useRef(null)
  const thirdRef=useRef(null)
  const counter = 23;
  const secondRefs=30
  const thirdRefs=40;

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image animation
      tl.from(".hero-img", {
        x: 100,
        opacity: 0,
        duration: 1,
      });

      // Text stagger animation
      tl.from(
        ".hero-text > *",
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.5"
      );

      // Button animation
      tl.from(
        ".hero-btn",
        {
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.4"
      );

      // Counter animation
      gsap.fromTo(
        counterRef.current,
        { innerText: 0 },
        {
          innerText: counter,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        }
      );
      gsap.fromTo(
        thirdRef.current,
        { innerText: 0 },
        {
          innerText: thirdRefs,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        }
      );
         gsap.fromTo(
        secondRef.current,
        { innerText: 0 },
        {
          innerText:secondRefs,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        }
      );
       tl.fromTo(
      ".hero-btn",
      { opacity: 0, y: 20 },          // start hidden, slightly down
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2 } 
      // animate to visible, stagger each button
    );


    },
    { scope: container }
  );

  return (
    <div ref={container} className="-my-[100px] bg-[#FBFBFB]" id="herosection">
      <div className="d--hero bg-base-200 min-h-screen">
        <div className="d--hero-content flex-col lg:flex-row-reverse my-0">
          
          {/* Image */}
          <img
            src={hero_section}
            className="hero-img max-w-sm rounded-lg shadow-2xl"
          />

          {/* Text Content */}
          <div className="hero-text">
            <h3 className="text-3xl my-3 mx-3">
              <TypeAnimation
                sequence={[
                  "Hi I am",
                  1000,
                  "Yash Nahar",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h3>

            <h1 className="text-6xl mx-2 my-3">Yash Kumar</h1>
            <h1 className="text-7xl mx-2 my-3">Web Developer</h1>

            <p className="py-4 pe-[200px] ps-4 text-[18px] my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem possimus adipisci est inventore!
            </p>

            <button className="hero-btn d--btn w-[210px] h-[45px] mx-4 rounded-xl bg-[#8186E7] text-white text-lg">
        <a href="#Services">Get Started</a>
      </button>
      <button className="hero-btn d--btn w-[210px] h-[45px] mx-4 rounded-xl bg-[#8186E7] text-white text-lg">
      <a href="#contact">  Contact Me</a>
      </button>

          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="flex bg-base-200 -my-[70px] mx-3 items-center w-[65%] justify-between px-5">
        <div>
          <h3 className="text-5xl font-bold">
            <span ref={counterRef}>0</span>+
          </h3>
          <label className="text-[#A1A1A1] font-light text-md">
            Work Experience
          </label>
        </div>

        <div>
          <h3 className="text-5xl font-bold">
            <span ref={secondRef}>0</span>+
            </h3>
          <label className="text-[#A1A1A1] font-light text-md">
            Total Clients
          </label>
        </div>

      <div>
          <h3 className="text-5xl font-bold">
            <span ref={thirdRef}>0</span>+
            </h3>
          <label className="text-[#A1A1A1] font-light text-md">
           Prorjects Done
          </label>
        </div>
      </div>
    </div>
  );
};
