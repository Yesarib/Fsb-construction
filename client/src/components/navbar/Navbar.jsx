import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 items-center justify-evenly d-flex flex mt-2">
      <div className="w-full text-center text-[24px]">FSB</div>
      <div className="w-full">
        <nav className="p-2 text-[17px] space-x-20">
          <a href="#">Projeler</a>
          <a className="" href="#">Şirket</a>
          <button className=" w-24 h-10 rounded-xl bg-primary text-white
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
