import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Contactus = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const secondheading = useRef(null);
  const paragraph = useRef(null);
  const left_side = useRef(null);
  const right_side = useRef(null);
  const details=useRef([])
  const formRef = useRef([]);
  const labelRef = useRef([]);
  const buttonRef = useRef(null);
  console.log(formRef)
  useGSAP(
    () => {
      gsap.from(heading.current, {
        opacity: 0,
        y: -30,
        duration: 6,
        delay:3,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
      gsap.from(secondheading.current, {
        opacity: 0,
        y: -30,
        duration: 6,
         delay:3,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
      gsap.from(left_side.current, {
        opacity:0,
        x:-900,
        duration:3,
          scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play play none reverse",
          markers: false,
        },
      });
      gsap.from(right_side.current,{
            opacity:0,
        x:900,
        duration:3,

          scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play play none reverse",
          markers: false,
        },
      })
      gsap.from(paragraph.current, {
        opacity: 0,
        x: -80,
        duration: 6,
        delay:3,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
      details.current.forEach((el, i) => {
      gsap.from(el, {
        y: -50,
        opacity: 0,
        duration:6,
        delay:3,
        stagger:0.5,
         scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    });

formRef.current.forEach(element => {
   gsap.from(element, {
        y: -50,
        opacity: 0,
        duration:6,
        delay:3,
        stagger:0.5,
         scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
});
gsap.from(buttonRef.current,{
  y:-300,
  duration:6,
  delay:3,
  opacity:0,
  scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers:false,
        },
})
        
    },
    { scope: section },
  );
console.log(details)
  return (
    <>
      <section className="min-h-screen py-12 px-4 overflow-hidden" ref={section} id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
       
          <div className="bg-white rounded-2xl shadow-xl p-10" ref={left_side}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4" ref={heading}>
              Contact Us
            </h1>

            <p
              className="text-gray-500 text-lg mb-8 leading-relaxed"
              ref={paragraph}
            >
              We'd love to hear from you. Send us your query and we will respond
              as soon as possible.
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-6" >
              {/* Email */}
              <div className="flex items-center gap-4 group" ref={el => details.current[0] = el} >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 group-hover:bg-yellow-400 transition" >
                  <i className="ri-mail-line text-2xl text-red-500"></i>
                </div>

                <a
                  href="mailto:naharansh489@gmail.com"
                  className="text-lg text-gray-700 hover:text-blue-600 transition"
                >
                  naharansh489@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group" ref={el => details.current[1] = el}>
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 group-hover:bg-yellow-400 transition">
                  <i className="ri-phone-fill text-2xl text-blue-600"></i>
                </div>

                <a
                  href="tel:9999999999"
                  className="text-lg text-gray-700 hover:text-blue-600 transition"
                >
                  +91 99999 99999
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group" ref={el => details.current[2] = el}>
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 group-hover:bg-yellow-400 transition">
                  <i className="ri-whatsapp-line text-2xl text-green-500"></i>
                </div>

                <a
                  href="https://wa.me/919999999999"
                  className="text-lg text-gray-700 hover:text-green-600 transition"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-2xl shadow-xl p-10" ref={right_side}>
            <h2
              className="text-3xl font-semibold text-gray-800 mb-6"
              ref={secondheading}
            >
              Send Message
            </h2>

            <form className="space-y-5">
             
              <div ref={el =>formRef.current[0]=el}>
                <label className="block text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Enter your name"
                 
                />
              </div>

            
              <div ref={el =>formRef.current[1]=el}>
                <label className="block text-gray-600 mb-1" >Email</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Enter your email"
                 
                />
              </div>

              
              <div ref={el =>formRef.current[2]=el}>
                <label className="block text-gray-600 mb-1" >Phone</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Enter phone number"
                 
                />
              </div>

              
              <div ref={el =>formRef.current[3]=el} >
                <label className="block text-gray-600 mb-1" >Message</label>
                <textarea
                  className="w-full h-32 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
                  placeholder="Write your message"
                ></textarea>
              </div>

              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
                ref={buttonRef}
              >
                Send Message
              </button>
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};
