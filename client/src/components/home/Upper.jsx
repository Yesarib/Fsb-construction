import React from "react";

const Upper = () => {
  return (
    <div className="font-roboto">
      <div className="inset-0 bg-black ">
        <img
          style={{ height: "45em",backgroundColor:'black' }}
          className="w-full object-cover brightness-50"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/SME-Building.png"
          alt="dd"
        />
        <div 
          style={{
            position: "absolute",
            top: "45%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <h1 className="text-[60px] text-lime-500 font-bold">
            BRINGING SYNERGY BETWEEN <br /> FSB AND CONSTRUCTION
          </h1>
          <p className="text-[16px] font-medium" >
            VEC is a BIM/VDC service provider with first-hand construction and
            engineering project delivery backgrounds. With BIM technologies, we
            help the best build better and pave digital transformation for the
            AEC industry! That provides us with a construction-first,
            technology-second mindset.
          </p>
          <button className="w-28 h-12 bg-primary mt-5 rounded-xl text-[20px]
            hover:bg-white hover:text-primary
          "
          > 
          Göz At 
          </button>

        </div>
      </div>
    </div>
  );
};

export default Upper;
