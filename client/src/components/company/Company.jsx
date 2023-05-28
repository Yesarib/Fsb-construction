import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
    <div className="w-full flex flex-col items-center justify-center mt-20 font-roboto">
      <div className="w-4/6 flex justify-start mt-5">
        <div>
          <h1 className="text-[36px] text-primary font-semibold">
            Şirket Hakkında
          </h1>
          <p className="text-[16px] w-full mt-2 mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repudiandae rerum libero consequuntur veritatis veniam sequi eos?
            Dolor numquam vero adipisci nemo molestias consequuntur ducimus, sit
            reprehenderit necessitatibus voluptatibus porro?
          </p>
        </div>
        <img className="w-4/6 h-80 mr-24 mt-2 rounded-3xl" src="https://beylikyapiinsaat.com/assets/img/hizmetler/kaba-insaat.jpg" alt="fsb" />
      </div>
      <div className="w-4/6 mt-10">
        <h1 className="flex justify-start mb-5 text-primary font-bold text-[36px]">
          Türkiye Çapında Faaliyetler
        </h1>
        <div className="w-11/12 flex justify-start">
          <p className="text-[16px]">
            FSB İnşaat, Türkiye'de faaliyet gösteren önde gelen bir inşaat
            şirketidir. Uzun yıllara dayanan deneyimi ve güçlü bir uzmanlıkla,
            inşaat sektöründe kaliteli ve yenilikçi projeler sunmaktadır.
            Müşteri memnuniyetini odak noktası olarak benimseyen FSB İnşaat,
            yüksek kaliteli inşaat ve mühendislik hizmetleri sunmak için uzman
            ekiplerle çalışmaktadır. Proje yönetimi, tasarım, planlama ve
            uygulama süreçlerinde uzmanlaşmış olan şirket, çeşitli ölçeklerdeki
            projeleri başarıyla tamamlamaktadır. FSB İnşaat, yenilikçi
            yaklaşımıyla sektörde öncü bir rol üstlenmekte ve inşaat alanında
            sürekli gelişimi desteklemektedir.
          </p>
        </div>
        <div className="flex justify-start space-x-96 mt-5">
          <div>
            <h1 className="text-primary text-[56px] font-bold">15+</h1>
            <h2 className="text-secondary text-[16px] font-bold ml-2">
              Çalışan
            </h2>
          </div>
          <div>
            <h1 className="text-primary text-[56px] font-bold">15+</h1>
            <h2 className="text-secondary text-[16px] font-bold ml-2">Proje</h2>
          </div>
          <div>
            <h1 className="text-primary text-[56px] font-bold">25+</h1>
            <h2 className="text-secondary text-[16px] font-bold ml-1">
              Yıl Tecrübe
            </h2>
          </div>
        </div>
      </div>
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
