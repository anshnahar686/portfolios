import { useGSAP } from "@gsap/react";
import first from "../assets/herosection.png";
import { useRef } from "react";
import gsap from "gsap";
export const About = () => {
  const main_section = useRef();
  const first_heading = useRef();
  const image_section = useRef();
  const download_button = useRef();
  const skill_cards=useRef()
  console.log()
  useGSAP(
    () => {
      gsap.from(first_heading.current, {
        y: -30,
        opacity: 0,
        duration: 4,
        ease: "power1",
        scrollTrigger: {
          trigger: main_section.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
      gsap.from(".underline", {
        y: 100,
        opacity: 0,
        duration: 4,
        ease: "power1",
      });
      gsap.from(image_section.current, {
        y: -200,
        opacity: 0,
        duration: 2.5,
        ease: "slow(0.2,0.7,false)",
        scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
      });
      gsap.from(".content", {
        y: 600,
        opacity: 0,
        duration: 2.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
      });
      gsap.from(download_button.current, {
        y: 600,
        opacity: 0,
        duration: 2.5,
        ease: "circ.out",
        scale: 2,
        scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
      });
      gsap.from(skill_cards.current,{
        y: 600,
        opacity:0,
        duration:2.4,
         ease: "circ.out",
         
        scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
      })
      gsap.fromTo(
        ".first_card .d--radial-progress",
        { "--d--value": 0 },
        {
          "--d--value":100,
          duration: 2,
          ease: "power2.out",
         scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
        },
      );
      gsap.fromTo(
        ".second_card .d--radial-progress",
        { "--d--value": 0 },
        {
          "--d--value": 85,
          duration: 2.4,
          ease: "power2.out",
            scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
        },
      );
      gsap.fromTo(
        ".third_card .d--radial-progress",
        {
          "--d--value": 0,
        },
        {
          "--d--value": 70,
          duration: 2,
          ease: "power2.out",
         scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
        },
      );
      gsap.fromTo(
        ".fourth_card .d--radial-progress",
        {
          "--d--value": 0,
        },
        {
          "--d--value": 60,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
          trigger: main_section.current,
          start: "top 40%",
        },
        },
      );
      
    },
    { scope: main_section },
  );
  return (
    <>
      <section className="py-12 bg-white" ref={main_section}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" ref={first_heading}>
            <h1 className="text-4xl font-bold text-gray-800">Who I Am</h1>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded underline"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center" ref={image_section}>
              <div className="p-3 bg-white rounded-full shadow-xl">
                <img
                  src={first}
                  className="w-[300px] h-[300px] object-cover rounded-full"
                  alt="profile"
                />
              </div>
            </div>

            <div className="content">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                autem? Id, voluptates nulla. Rerum iste accusamus error quia,
                dicta molestias, sint perspiciatis eligendi pariatur maxime ea
                fuga, optio quibusdam nam.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fuga facilis, voluptate quaerat dignissimos dolorum
                nulla veritatis.
              </p>

              {/* Button */}
              <button
                className="mt-6 flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
                ref={download_button}
              >
                Download CV
                <i className="ri-file-download-line text-lg"></i>
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16"ref={skill_cards}>
            {/* Skill Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl  first_card">
              <div
                className="d--radial-progress mx-auto text-indigo-700"
                style={{
                  "--d--value": 100,
                  width: "110px",
                  height: "110px",
                }}
                role="progressbar"
              >
                <i className="ri-nodejs-fill text-4xl"></i>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-4">100%</h2>
              <p className="text-indigo-500 font-semibold text-lg mt-1">
                NodeJS
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl  second_card">
              <div
                className="d--radial-progress mx-auto text-indigo-700"
                style={{
                  "--d--value": 85,
                  width: "110px",
                  height: "110px",
                }}
                role="progressbar"
              >
                <i className="ri-reactjs-line text-4xl"></i>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-4">85%</h2>
              <p className="text-indigo-500 font-semibold text-lg mt-1">
                ReactJS
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl  third_card">
              <div
                className="d--radial-progress mx-auto text-indigo-700"
                style={{
                  "--d--value": 70,
                  width: "110px",
                  height: "110px",
                }}
                role="progressbar"
              >
                <i className="ri-bootstrap-fill text-4xl"></i>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-4">70%</h2>
              <p className="text-indigo-500 font-semibold text-lg mt-1">
                Bootstrap
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition fourth_card">
              <div
                className="d--radial-progress mx-auto text-indigo-700"
                style={{
                  "--d--value": 60,
                  width: "110px",
                  height: "110px",
                }}
                role="progressbar"
              >
                <i className="ri-github-fill text-4xl"></i>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-4">60%</h2>
              <p className="text-indigo-500 font-semibold text-lg mt-1">
                GitHub
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
