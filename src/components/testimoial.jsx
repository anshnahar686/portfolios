import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Slider from "react-slick";
import userone from "../assets/userone.png"
import usertwo from "../assets/usertwo.png"
import userthree from '../assets/userthree.png'
import userfour from '../assets/userfour.png'
import userfive from '../assets/userfive.png'
gsap.registerPlugin(ScrollTrigger);

export const Testinomial = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useGSAP(
    () => {
      gsap.from(heading.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
        },
      });

      gsap.from(slider.current, {
        y: 120,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
        },
      });
    },
    { scope: section },
  );

  const testimonials = [
    {
      text: "This dashboard has completely transformed how we manage our sales data. The validation rules prevent errors, and the interface is so intuitive that even new team members pick it up quickly. Truly a lifesaver for our business.",
      name: "John Deo",
      role: "Managing Director, BrightPath Solutions",
      img: userone,
    },
    {
      text: "The export and analytics features are outstanding. We can now generate reports in seconds, and the clarity of the labels makes them easy to understand for non-technical staff. It’s exactly what we needed." ,
      name: "Priya Sharma",
      role: "CEO, BrightPath Solutions",
      img: usertwo,
    },
    {
      text: "I appreciate how responsive the team was during development. They anticipated issues before they became problems and provided clear, business-friendly error messages. It’s rare to find such a balance of technical expertise and user focus. ",
      name: "Arjun Patel ",
      role: "Founder & CTO, Skyline Innovations",
      img: userthree,
    },
    {
      text: "From schema design to deployment, everything was handled with precision. The sample test data they provided helped us stress-test the system before launch, which gave us confidence in its reliability.",
      name: "Sneha Kapoor",
      role: "Head of Operations, NextWave Technologies",
      img: userfour,
    },
    {
      text: "I’ve worked with many tools, but this one stands out. The UI feels polished, the spacing and layout are consistent, and the backend constraints ensure compliance with GST and payment rules. It’s both robust and user-friendly.",
      name: "John Deo",
      role: "Director of Product Development, Vertex Solutions",
      img: userfive,
    },
  ];

  return (
    <section className="my-[60px]" ref={section}>
      <div className="mx-auto max-w-7xl py-6 px-4">
      
        <div className="text-center mb-10" ref={heading}>
          <h1 className="text-4xl font-bold">What Our Client's Say</h1>
          <p className="mt-3 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Slider */}
        <div ref={slider}>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white shadow-lg rounded-xl p-6 h-full">
                  <p className="text-gray-500 text-lg text-center">
                    {item.text}
                  </p>

                  <div className="flex justify-center mt-6">
                    <img src={item.img} className="w-16 h-16 rounded-full" />
                  </div>

                  <div className="text-center mt-3">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
