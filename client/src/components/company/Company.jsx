import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import About from "../home/About";

const Company = () => {
  const containerStyle = {
    width: '1200px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  const REACT_APP_GOOGLE_MAPS_API_KEY= "AIzaSyDJ4vvbz3JikGjYQ92HY7yymxXtt6Kq5a0"

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 font-roboto grid place-items-center">
      <div className="w-full md:w-4/6 flex justify-start mt-5">
        <div className="md:w-1/2">
          <h1 className="text-[36px] text-primary font-semibold md:text-4xl">
            Şirket Hakkında
          </h1>
          <p className="text-[16px] w-full mt-2 mr-5 md:text-base lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repudiandae rerum libero consequuntur veritatis veniam sequi eos?
            Dolor numquam vero adipisci nemo molestias consequuntur ducimus, sit
            reprehenderit necessitatibus voluptatibus porro?
          </p>
        </div>
        <div className="md:w-1/2 ml-10">
          <img className="w-4/6 h-80 rounded-3xl mt-5 md:mt-0 hidden lg:block" src="https://beylikyapiinsaat.com/assets/img/hizmetler/kaba-insaat.jpg" alt="fsb" />
        </div>
      </div>
      <About />
      <div className="mt-24 ">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    </div>
  );
};

export default Company;
