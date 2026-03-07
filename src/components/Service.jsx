import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export const Services = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const cards = useRef([]);
  const icons = useRef([]);
  const text = useRef([]);
  const para = useRef([]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  console.log(cards);
  useGSAP(
    () => {
      gsap.from(heading.current, {
        opacity: 0,
        y: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });

      gsap.from(cards.current, {
        opacity: 0,
        y: -150,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
      icons.current.forEach((ele) => {
        gsap.from(ele, {
          opacity: 0,
          y: 90,
          duration: 4,
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            markers: true,
          },

          ease: "power4.out",
        });
      });
      text.current.forEach((ele) => {
        gsap.from(ele, {
          opacity: 0,
          y: 90,
          duration: 3,
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            markers: true,
          },
          ease: "power4.out",
        });
      });
      para.current.forEach((ele) => {
        gsap.from(ele, {
          opacity: 0,
          x: 20,
          duration: 6,
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            markers: true,
          },
          ease: "power4.out",
          
        });
      });
    },
    { scope: section },
  );

  return (
    <>
      <section className="mt-[100px]" id="Services" ref={section}>
        <div className="bg-[#FBFBFB] my-2 min-h-screen py-4">
          <div className="text-center my-2 text-4xl  " ref={heading}>
            <h1 className="text-4xl">Services</h1>
            <p className="mt-3 mb-[30px] text-2xl font-serif ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
          </div>
          <div className="flex justify-between flex-wrap  items-center my-4 mx-2 ">
            <div
              className="d--card w-full lg:w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] ms-10 px-2 my-5 !rounded-xl me-4 "
              ref={(el) => (cards.current[0] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i
                    class="ri-code-s-slash-line text-5xl"
                    ref={(el) => (icons.current[0] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-xl font-medium my-3"
                  ref={(el) => (text.current[0] = el)}
                >
                  Website Design & Development
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[0] = el)}
                >
                  Website design and development is the process of creating
                  visually appealing, user-friendly, and functional websites.
                </p>
              </div>
            </div>
            <div
              className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] mx-10 px-2 my-5 !rounded-xl"
              ref={(el) => (cards.current[1] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i
                    class="ri-database-2-fill text-5xl"
                    ref={(el) => (icons.current[1] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-xl font-medium my-3"
                  ref={(el) => (text.current[1] = el)}
                >
                  Backend & Database Features
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[1] = el)}
                >
                  Backend and database features form the backbone of any dynamic
                  web application. The backend handles server-side logic, API
                  integration.{" "}
                </p>
              </div>
            </div>
            <div
              className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] me-4   px-2 my-5 ms-4 !rounded-xl"
              ref={(el) => (cards.current[2] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i
                    class="ri-npmjs-line text-5xl"
                    ref={(el) => (icons.current[2] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-xl font-medium my-3 -px-0"
                  ref={(el) => (text.current[2] = el)}
                >
                  API Development & Integration
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[2] = el)}
                >
                  API Development focuses on building interfaces that expose
                  specific functionalities or data from an application and
                </p>
              </div>
            </div>
            <div
              className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] ms-10 px-2 my-5 me-4  !rounded-xl"
              ref={(el) => (cards.current[3] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i
                    class="ri-search-line text-5xl"
                    ref={(el) => (icons.current[3] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-xl font-medium my-3 -px-0"
                  ref={(el) => (text.current[3] = el)}
                >
                  Search Engine Optimization (SEO)
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[3] = el)}
                >
                  Search Engine Optimization (SEO) is the practice of improving
                  a website’s visibility in search engine results to attract
                  more organic traffic. It involves optimizing content,
                  keywords, meta tags,{" "}
                </p>
              </div>
            </div>
            <div
              className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB] mx-10 px-2 my-5 !rounded-xl  "
              ref={(el) => (cards.current[4] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center ">
                  <i
                    class="ri-headphone-line text-5xl "
                    ref={(el) => (icons.current[4] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-2xl font-medium my-4 mb-9"
                  ref={(el) => (text.current[4] = el)}
                >
                  Technical Support
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[4] = el)}
                >
                  API development and integration enable seamless communication
                  between different software systems.Integration connects
                  external services—like payment gateways, social media.{" "}
                </p>
              </div>
            </div>
            <div
              className="d--card w-85 bg-base-100 d--card-md shadow-lg !bg-[#DBDBDB]  me-4 px-2 my-5 ms-4 !rounded-xl "
              ref={(el) => (cards.current[5] = el)}
            >
              <div className="d--card-body">
                <div className="flex items-center justify-center">
                  <i
                    class="ri-shield-fill text-5xl"
                    ref={(el) => (icons.current[5] = el)}
                  ></i>
                </div>
                <h5
                  className="text-center text-2xl font-medium my-4 mb-9"
                  ref={(el) => (text.current[5] = el)}
                >
                  Security Enhancements
                </h5>
                <p
                  className="text-justify  text-lg tracking-normal"
                  ref={(el) => (para.current[5] = el)}
                >
                  Security enhancements are critical for protecting websites and
                  applications from threats like data breaches, malware, and
                  unauthorized access. They include implementing HTTPS,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
