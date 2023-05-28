import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 items-center justify-evenly d-flex flex mt-2 ">
      <div className="w-full flex justify-center items-center text-[24px]">
        <a className="font-roboto flex " href="/"> 
          <img src="assets/logo.png" alt="logo" />
        </a>
      </div>
      <div className="w-full">
        <nav className="p-2 text-[17px] space-x-20">
          <a className="font-roboto hover:border-blue-500 hover:border-b-2 " href="/projects">Projeler</a>
          <a className="font-roboto hover:border-blue-500 hover:border-b-2 " href="/company">Şirket</a>
          <button className=" w-24 h-10 rounded-xl bg-primary text-white font-roboto
            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
          "          
          >
            İletişim
         </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
