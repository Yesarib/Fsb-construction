import React, { useEffect, useState } from "react";
import projectService from "../../context/project";
const Footer = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    await projectService.getProject().then((res) => {
      setProjects(res.data);
      console.log(res.data);
    })
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 bg-neutral-600 font-roboto grid place-items-center">
      <div className="w-full md:w-4/5 flex text-white space-x-36 mt-10 grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <h1 className="text-[20px] font-semibold tracking-widest md:text-2xl"> FSB </h1>
          <p className="text-[15px] mt-3 w-full md:w-96 md:text-sm">
          FSB İnşaat, Türkiye'de faaliyet gösteren önde gelen bir inşaat şirketidir. Uzun yıllara dayanan deneyimi ve güçlü bir uzmanlıkla, inşaat sektöründe kaliteli ve yenilikçi projeler sunmaktadır. Müşteri memnuniyetini odak noktası olarak benimseyen FSB İnşaat, yüksek kaliteli inşaat ve mühendislik hizmetleri sunmak için uzman ekiplerle çalışmaktadır.
          </p>
        </div>
        <div className="flex flex-col grid grid-cols-1 md:grid-cols-1">
          <h1 className="text-[20px] font-semibold tracking-widest md:text-2xl"> Projeler </h1>
          {projects.slice(0,3).map((project) => (
            <div className="mt-2" key={project._id}>
              <ul className="mt-2 md:text-sm">
                <li>
                  <a href={`projects/${project._id}`}> {project.title} </a>
                </li>
              </ul>
            </div>

          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-semibold tracking-widest md:text-2xl"> İletişim </h1>
          <a className="text-[17px] mt-3 md:text-sm" href="#"> yesari.yesari@gmail.com </a>
          <a className="text-[16px] mt-3 md:text-sm"  href="#"> +90 555 222 12 23 </a>
          <a className="text-[16px] mt-3 md:text-sm"  href="#"> Adres 1 </a>
          <div className="flex space-x-10 mt-3">
            <img src="assets/facebook.png" alt="facebook" className="w-7 mt-2"/>
            <img src="assets/linkedin.png" alt="facebook" className="w-7 mt-2"/>
            <img src="assets/twitter.png" alt="facebook" className="w-7 mt-2"/>
          </div>
        </div>        
      </div> 
      <div>
        <h1 className="text-white mt-10"> Barış Yesari</h1>
      </div>
    </div>
  );
};

export default Footer;
