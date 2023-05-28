import React from "react";

const Login = () => {
  return (
    <div className="w-full flex justify-center place-items-center h-screen font-roboto">
      <div className="w-1/3 text-center">
        <h1 className="text-primary font-bold text-[36px] mt-5 tracking-wider">FSB İnşaat</h1>
        <h2 className="text-primary font-semibold text-[24px] mt-5 tracking-widest"> Giriş </h2>
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="flex justify-start w-96 ml-5  ">
            <label htmlFor="email" className="text-secondary text-[18px] tracking-wider">Email</label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="w-96 border-2 rounded-xl border-teal-600"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="flex justify-start w-96 ml-5">
            <label htmlFor="password" className="text-secondary  text-[18px] tracking-wider">Şifre</label>
          </div>
          <input
          type="password"
          name="password"
          id="password"
          className="w-96 border-2 rounded-xl border-teal-600"
        />
        </div>
        <button className="mt-16 w-72 h-10 text-white font-semibold text-[20px] tracking-widest rounded-3xl bg-primary hover:bg-orange-700"> Giriş </button>
      </div>
    </div>
  );
};

export default Login;
