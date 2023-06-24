import React from "react";

const WhyChoose = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 font-roboto grid place-items-center">
      <div className="w-4/6 flex justify-start">
        <h1 className="flex justify-start mb-5 text-primary font-bold text-[36px] md:text-4xl">
          Bizi Neden Seçmelisiniz ?
        </h1>
      </div>
      <div className="w-full md:w-4/6 flex justify-start ml-0 md:ml-24 mt-10 space-x-0 md:space-x-24 grid md:grid-cols-2">
        <div className="w-full md:w-4/6 flex items-center ">
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/512/3352/3352700.png"
            alt=""
          />
          <div className="w-full">
            <h1 className="ml-10 text-[17px] font-bold text-orange-700">
              {" "}
              Seçenek 1
            </h1>
            <p className="ml-10 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              suscipit et soluta corporis ad reprehenderit impedit, nobis
              assumenda aut esse distinctio dolorem porro facilis aliquid eaque
              ipsam omnis. Eos, dignissimos!
            </p>
          </div>
        </div>
        <div className="w-full md:w-4/6 flex items-center ">
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/512/3352/3352700.png"
            alt=""
          />
          <div>
            <h1 className="ml-10 text-[17px] font-bold text-orange-700">
              {" "}
              Seçenek 2
            </h1>
            <p className="ml-10 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              suscipit et soluta corporis ad reprehenderit impedit, nobis
              assumenda aut esse distinctio dolorem porro facilis aliquid eaque
              ipsam omnis. Eos, dignissimos!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/6 flex justify-start ml-0 md:ml-24 mt-16 space-x-0 md:space-x-24 grid md:grid-cols-2">
        <div className="w-full md:w-4/6 flex items-center ">
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/512/3352/3352700.png"
            alt=""
          />
          <div>
            <h1 className="ml-10 text-[17px] font-bold text-orange-700">
              {" "}
              Seçenek 1
            </h1>
            <p className="ml-10 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              suscipit et soluta corporis ad reprehenderit impedit, nobis
              assumenda aut esse distinctio dolorem porro facilis aliquid eaque
              ipsam omnis. Eos, dignissimos!
            </p>
          </div>
        </div>
        <div className="w-full md:w-4/6 flex items-center ">
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/512/3352/3352700.png"
            alt=""
          />
          <div>
            <h1 className="ml-10 text-[17px] font-bold text-orange-700">
              {" "}
              Seçenek 2
            </h1>
            <p className="ml-10 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              suscipit et soluta corporis ad reprehenderit impedit, nobis
              assumenda aut esse distinctio dolorem porro facilis aliquid eaque
              ipsam omnis. Eos, dignissimos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
