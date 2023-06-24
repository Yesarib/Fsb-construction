import React from "react";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center mt-20 font-roboto grid place-items-center">
      <div className="w-full md:w-4/6">
        <h1 className="flex justify-start mb-5 text-primary font-bold text-[36px] md:text-4xl">
          Türkiye Çapında Faaliyetler
        </h1>
        <div className="w-full md:w-11/12 flex justify-start">
          <p className="text-[16px] md:text-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-10">
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
    </div>
  );
};

export default About;
