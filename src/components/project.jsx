import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contact_us from "../assets/contact_app.png"
import book_store from '../assets/bookstore.png'
import school_management from '../assets/student_management_app.png'
import student_api from '../assets/student_api.png'
import service_app from '../assets/service_app.png'
import ecommerce from '../assets/ecommerce.png'
gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const section = useRef(null);
  const heading = useRef(null);
  const cards = useRef([]);
  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        heading.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 90%", // safer trigger
            toggleActions: "play none none reverse",
            markers: false,
          },
        },
      );

      // Cards animation
      gsap.fromTo(
        cards.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 90%", // important change
            toggleActions: "play none none reverse",
            markers: false,
          },
        },
      );

      // 🔥 Force recalculation (important)
      ScrollTrigger.refresh();
    },
    { scope: section },
  );
  const data = [
    {
      title: "BookStore",
      description:
        "The app provides a seamless platform for users to browse, search, and purchase books, while administrators can add, update, or remove book listings. It leverages MongoDB for storing book and user data, Express.js and Node.js for backend APIs and server logic, and React for building a dynamic, responsive frontend interface. ",
      image:
        book_store,
        live:'https://bookstore-2-nsp7.onrender.com/',
        source:'https://github.com/anshnahar686/bookstore.git'
    },
    {
      title: "Service App",
      description:
        "The app allows users to browse, book, and manage services online, while service providers can list, update, and track their offerings. It uses MongoDB for storing service and user data, Express.js + Node.js for backend APIs and business logic, and React for building a responsive, user-friendly interface.",
      image:
        service_app,
      live:'https://serverice-frontend.onrender.com/',
      source:'https://github.com/anshnahar686/services.git'
    },
    {
      title: "Contact App",
      description:
        "The app enables users to store, organize, and update contact information such as names, phone numbers, emails, and addresses. It uses MongoDB for secure data storage, Express.js + Node.js for backend APIs and server logic, and React for a clean, interactive frontend interface., and React for building a responsive, user-friendly",
      image:
        contact_us,
        live:'https://contactus-imtn.onrender.com/contactus/',
        source:'https://github.com/anshnahar686/contactus.git'
    },
     {
      title: "Student Api App",
      description:
        "The app enables developers or institutions to create, read, update, and delete student records through RESTful APIs. It uses MongoDB to store student information, Express.js + Node.js to build and expose APIs, and React for a lightweight interface to interact with the data.",
      image:
        student_api,
      live:'https://student-api-2-c36a.onrender.com/',
      source:'https://github.com/anshnahar686/student_api.git'
    },
    {
      title: "School Management App",
      description:
        "The app provides tools for managing students, teachers, classes, and administrative operations in one centralized system. It uses MongoDB for storing structured school data, Express.js + Node.js for backend APIs and logic, and React for an intuitive, interactive frontend interface.",
      image:
        school_management,
        live:'#',
      source:'#'
    },
    {
      title: "E-commerce",
      description:
        "The app provides a digital marketplace where customers can explore product catalogs, add items to their cart, and complete secure checkouts, while administrators can manage inventory, orders, and user accounts. It uses MongoDB for storing product and user data, Express.js + Node.js for backend APIs ",
      image:
        ecommerce,
        live:'#',
      source:'#'
    },
  ];
  return (
    <section
      ref={section}
      className="pt-32 pb-20 px-6 min-h-screen bg-gray-100"
      id="projects"
    >
      {/* Heading */}
      <div ref={heading}>
        <h1 className="text-5xl font-bold text-center mb-16">Our Projects</h1>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cards.current[index] = el)}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-full"
          >
            <div className="d--card bg-base-100 w-full shadow-sm">
              <figure className="relative h-52 overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h2 className="text-white text-3xl font-bold translate-y-5 group-hover:translate-y-0 transition duration-500">
                    {item.title}
                  </h2>
                </div>
              </figure>

              <div className="d--card-body">
                <h2 className="d--card-title">{item.title}</h2>
                <p className="text-justify text-lg my-4">{item.description}</p>

                <div className="flex gap-3 w-full">
                  <button className="border border-purple-500 text-purple-500 py-2 rounded-lg w-1/2 hover:bg-purple-500 hover:text-white transition">
                    <a href={item.source} target="_blank" rel="noopener noreferrer">Source</a>
                  </button>
                  <button className="bg-purple-500 text-white py-2 rounded-lg w-1/2 hover:bg-purple-600 transition">
                    <a href={item.live} target="_blank" rel="noopener noreferrer">Live</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
