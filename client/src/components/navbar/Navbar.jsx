import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full h-16 items-center justify-evenly d-flex flex mt-2 ">
      <div className="w-full flex justify-center items-center text-[24px]">
        <a className="font-roboto flex h-20 " href="/">
          <img className="object-none" src="assets/logo.png" alt="logo" />
        </a>
      </div>
      <div className={`w-full ${menuOpen ? "block" : "hidden"} md:block`}>
        <nav className="p-2 text-[17px] space-x-6 md:space-x-20">
          <a
            className="font-roboto hover:border-blue-500 hover:border-b-2 tracking-wider"
            href="/projects"
          >
            Projeler
          </a>
          <a
            className="font-roboto hover:border-blue-500 hover:border-b-2 tracking-wider"
            href="/company"
          >
            Kurumsal
          </a>
          <a href="/contact">
            <button
              className=" w-24 h-10 rounded-xl bg-primary text-white font-roboto
            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
            "
            >
              İletişim
            </button>
          </a>
        </nav>
      </div>
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex justify-center items-center focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
