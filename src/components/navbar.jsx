import { Link } from "react-router";
import first from "../assets/logo.png";
export const Navbar = () => {
  return (
    <>
      {/* <div className="sticky top-0 z-[2000] bg-[#474646]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          <div className="flex items-center">
            <img
              src={first}
              alt="Logo"
              className="h-20 w-auto object-contain "
            />
          </div>

         
          <ul className="hidden md:flex items-center gap-8 text-[#F0E8E8] text-lg">
            <li>
              <a href="#herosection" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Project
              </Link>
            </li>
          </ul>

         
          <button className="md:hidden text-white text-2xl">☰</button>
        </nav>
      </div> */}
      <div className="sticky top-0 z-[2000] bg-[#474646]/90 backdrop-blur-md border-b border-white/10">
  <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* LOGO */}
    <div className="flex items-center gap-2">
      <img
        src={first}
        alt="Logo"
        className="h-14 w-auto object-contain hover:scale-105 transition-transform"
      />
    </div>

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex items-center gap-10 text-[#F0E8E8] text-lg font-medium">
      {[
        { name: "Home", link: "#herosection" },
        { name: "About", link: "#projects" },
        { name: "Services", link: "/services" },
        { name: "Features", link: "/features" },
        { name: "Projects", link: "/projects" },
      ].map((item, i) => (
        <li key={i} className="relative group">
          <a
            href={item.link}
            className="transition-all group-hover:text-white"
          >
            {item.name}
          </a>

          {/* underline */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#8186E7] transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>

    {/* CTA + MOBILE ICON */}
    <div className="flex items-center gap-4">
      <button className="hidden md:block px-6 py-2 rounded-xl bg-[#8186E7] text-white font-medium shadow-lg hover:bg-[#6f74e0] transition">
        Contact Me
      </button>

      <button className="md:hidden text-white text-3xl hover:scale-110 transition">
        ☰
      </button>
    </div>
  </nav>
</div>

    </>
  );
};
