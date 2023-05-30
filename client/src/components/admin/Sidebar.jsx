import React from "react";

const Sidebar = ({ onContentChange, hscreen }) => {
  return (
    <div className={`w-72 ${hscreen} bg-indigo-950 flex flex-col items-center`} >
      <div className="items-center mt-20">
        <h1 className="text-white font-bold text-[24px] mt-16 tracking-widest"> FSB İnşaat </h1>
        <h1 className="text-white text-[20px] mt-10 tracking-wider"> Barış Yesari </h1>
        <div className="flex flex-col">
          <div className="flex mt-10 space-x-5">
            <img className="w-8" src="/assets/research.png" alt="research" />
            <button onClick={() => onContentChange("overview")} className="text-gray-300 text-[18px] tracking-wider"> Genel Bakış </button>
          </div>
          <div className="flex mt-10 space-x-5">
            <img
              className="w-8"
              src="/assets/analytics.png"
              alt="reseanalyticsarch"
            />
            <button onClick={() => onContentChange("projects")} className="text-gray-300 text-[18px] tracking-wider"> Projeler </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
