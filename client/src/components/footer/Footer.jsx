import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center mt-20 bg-gray-100 mb-10">
      <div className="w-4/5 flex justify-evenly space-x-36 mt-10">
        <div>
          <h1 className="text-[20px] text-primary font-semibold"> FSB </h1>
          <a className="text-[16px] mt-5" href="#"> Şirket Hakkında</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] text-primary font-semibold"> Projeler </h1>
          <a className="text-[16px] mt-3"  href="#"> Proje 1 </a>
          <a className="text-[16px] mt-3"  href="#"> Proje 2 </a>
          <a className="text-[16px] mt-3"  href="#"> Proje 3 </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] text-primary font-semibold"> İletişim </h1>
          <a className="text-[17px] mt-3" href="#"> yesari.yesari@gmail.com </a>
          <a className="text-[16px] mt-3"  href="#"> +90 555 222 12 23 </a>
          <a className="text-[16px] mt-3"  href="#"> Adres 1 </a>
          <div className="flex space-x-10 mt-3">
            <img src="assets/facebook.png" alt="facebook" className="w-7 mt-2"/>
            <img src="assets/linkedin.png" alt="facebook" className="w-7 mt-2"/>
            <img src="assets/twitter.png" alt="facebook" className="w-7 mt-2"/>
          </div>
        </div>        
      </div> 
    </div>
  );
};

export default Footer;
