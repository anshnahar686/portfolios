import { useGSAP } from "@gsap/react";
import first from "../assets/logo.png";
import gsap from "gsap";
import { useRef } from "react";
import { motion } from "framer-motion";
export const Footer = () => {
  const section = useRef(null);
  const image = useRef(null);
  const button = useRef([]);
  const footer=useRef(null)

  const iconRefs = useRef([]);

  // console.log(icnons)
  useGSAP(() => {
    button.current = button.current.filter(Boolean);
    // icnons.current=icnons.current.filter(Boolean)
    gsap.from(image.current, {
      opacity: 0,
      y: 300,
      scrollTrigger: {
        trigger: section.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },

      ease: "power1.inOut",
      duration: 3,
    });
    gsap.from(
      button.current,
      {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // one-by-one animation
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false, // remove green markers
        },
      },
      { scope: section },
    );
    gsap.from(footer.current,{
      opacity:0,
      y:400,
      
      duration:4,
      ease:'expo.in'

    })
  

  });
 

  const icons = [
    { icon: "ri-facebook-circle-fill", tooltip: "facebook" },
    { icon: "ri-twitter-x-fill", tooltip: "twitter" },
    { icon: "ri-telegram-fill", tooltip: "telegram" },
    { icon: "ri-whatsapp-line", tooltip: "whatsapp" },
    { icon: "ri-linkedin-box-fill", tooltip: "linkedin-box" },
    { icon: "ri-github-fill", tooltip: "github" },
  ];
  return (
    <>
      <div className="bg-[#FBFBFB] mt-[120px] h-full" ref={section}>
        <div className=" bg-[#141313C7] py-[90px] rounded-xl text-center">
          <h1 className="text-4xl font-medium text-white/80 mb-6" ref={image}>
            <img src={first} className="h-40 w-auto object-cover mx-auto" />
          </h1>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Contactus",
              "Testimonial",
            ].map((item, index) => (
              <button
                key={index}
                className="text-lg md:text-xl text-[#F0E8E8CC] hover:text-white transition"
                ref={(el) => (button.current[index] = el)}
              >
                {item}
              </button>
            ))}
          </div>

         <div className="flex justify-center gap-5 mb-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black transition d--tooltip"
          data-tip={icon.tooltip}
          ref={(el) => (iconRefs.current[index] = el)}
        >
          <i className={`${icon.icon} text-2xl text-white/80`}></i>
        </div>
      ))}
    </div>

          <p className="text-sm text-white/60" ref={footer}>
            Designed By @yashNahar UI/UX Designs
          </p>
        </div>
      </div>
    </>
  );
};
