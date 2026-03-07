import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const cards = useRef([]);

  cards.current = [];

  useGSAP(() => {

    gsap.from(heading.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%",
      }
    });

    gsap.from(cards.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 70%",
      }
    });

  }, { scope: section });

  return (
    <section ref={section} className="py-20">
      <div ref={heading}>
        <h1 className="text-5xl font-bold text-center">Our Projects</h1>
      </div>

      
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 my-6">
          {[
            "BookStore",
            "Contact App",
            "Student_App",
            "Services",
            "Project Fifth",
            "Project Sixth",
          ].map((title, index) => (
            <div
              key={index}
             
              className="group bg-[#dbdbdbc9] rounded-none shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Image */}
              <figure className="overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt={title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 h-56">
                  <h2 className="text-white text-xl font-semibold translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                    {title}
                  </h2>
                </div>
              </figure>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-700">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts.
                </p>

                <div className="flex gap-4 pt-4">
                  <button className="d--btn d--btn-accent rounded-xl flex-1">
                    View Project
                  </button>
                  <button className="d--btn d--btn-outline rounded-xl flex-1">
                    Source Code
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>


    </section>
  );
};
// ref={(el)=> cards.current[index] = el}