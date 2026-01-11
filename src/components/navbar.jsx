import { Link } from "react-router";
import first from "../assets/logo.png";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export const Navbar = () => {
  // Navbar container
  const mainNav = {
    initial: { y: 120, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Logo
  const logoVariants = {
    initial: { x: 40, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Links
  const linksVariants = {
    initial: { y: 90, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Button
  const buttonVariants = {
    initial: { y: 70, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    hover: {
      scale: 0.95,
      backgroundColor: "#6f74e0",
      transition: { duration: 0.5 },
    },
  };

  // Link hover
  const itemVariants = {
    initial: { y: 0, color: "#ccc" },
    hover: {
      y: -6,
      color: "#fff",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  // Controls
  const navControls = useAnimationControls();
  const logoControls = useAnimationControls();
  const linksControls = useAnimationControls();
  const buttonControls = useAnimationControls();

  useEffect(() => {
    const runTimeline = async () => {
      await navControls.start("animate");     // 1️⃣ navbar
      await logoControls.start("animate");    // 2️⃣ logo
      await linksControls.start("animate");   // 3️⃣ links
      await buttonControls.start("animate");  // 4️⃣ button
    };
    runTimeline();
  }, []);

  return (
    <motion.div
      className="sticky top-0 z-[2000] bg-[#474646]/90 backdrop-blur-md rounded-sm shadow-sm"
      variants={mainNav}
      initial="initial"
      animate={navControls}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          variants={logoVariants}
          initial="initial"
          animate={logoControls}
        >
          <img
            src={first}
            alt="Logo"
            className="h-14 w-60 object-cover hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Links */}
        <motion.ul
          className="hidden md:flex items-center gap-10 text-[#F0E8E8] text-lg font-medium"
          variants={linksVariants}
          initial="initial"
          animate={linksControls}
        >
          {[
            { name: "Home", link: "#herosection" },
            { name: "About", link: "#projects" },
            { name: "Services", link: "/services" },
            { name: "Features", link: "/features" },
            { name: "Projects", link: "/projects" },
          ].map((item, i) => (
            <motion.li key={i} className="relative group" variants={linksVariants}>
              <motion.a
                href={item.link}
                className="inline-block transition-colors"
                variants={itemVariants}
                initial="initial"
                whileHover="hover"
              >
                {item.name}
              </motion.a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#8186E7] transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Button */}
        <div className="flex items-center gap-4">
          <motion.button
            className="hidden md:block px-6 py-2 rounded-xl bg-[#8186E7] text-white font-medium shadow-lg"
            variants={buttonVariants}
            initial="initial"
            animate={buttonControls}
            whileHover="hover"
          >
            Contact Me
          </motion.button>

          <button className="md:hidden text-white text-3xl hover:scale-110 transition">
            ☰
          </button>
        </div>
      </nav>
    </motion.div>
  );
};