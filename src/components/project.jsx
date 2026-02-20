import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
export const Project = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const cards = useRef(null);
console.log(cards.current)
  useGSAP(
    () => {
      gsap.from(heading.current, {
        y: -100,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: true,
        },
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
     
    },
    { scope: section },
  );
  return (
    <>
      <section id="projects" className="bg-[#FBFBFB] py-20" ref={section}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" ref={heading}>
            <h1 className="text-5xl font-bold">Our Projects</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3" ref={cards}>
            {[
              "Project One",
              "Project Two",
              "Project Three",
              "Project Fourth",
              "Project Fifth",
              "Project Sixth",
            ].map((title, index) => (
              <div
                key={index}
                className="group d--card bg-[#dbdbdbc9] rounded-none shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                
              >
                {/* Image */}
                <figure className="overflow-hidden rounded-t-2xl">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt={title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 relative rounded-none"
                  />
                        <div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500 h-56 rounded-sm " 
                >
                  <h2 className="text-white text-xl font-semibold translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                    {title}
                  </h2>
                </div>
                </figure>

          

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts.
                  </p>

                  {/* Actions */}
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
        </div>
      </section>
    </>
  );
};
