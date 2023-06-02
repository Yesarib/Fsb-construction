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
    <div className="w-full h-96 flex flex-col items-center justify-center mt-20 bg-neutral-600 font-roboto ">
      <div className="w-4/5 flex text-white justify-evenly space-x-36 mt-10">
        <div>
          <h1 className="text-[20px] font-semibold tracking-widest"> FSB </h1>
          <p style={{width:'35em'}} className="text-[15px] mt-3">
          FSB İnşaat, Türkiye'de faaliyet gösteren önde gelen bir inşaat şirketidir. Uzun yıllara dayanan deneyimi ve güçlü bir uzmanlıkla, inşaat sektöründe kaliteli ve yenilikçi projeler sunmaktadır. Müşteri memnuniyetini odak noktası olarak benimseyen FSB İnşaat, yüksek kaliteli inşaat ve mühendislik hizmetleri sunmak için uzman ekiplerle çalışmaktadır.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-semibold tracking-widest"> Projeler </h1>
          {projects.slice(0,3).map((project) => (
            <div className="m-2" key={project._id}>
              <ul className="mt-2">
                <li>
                  <a href={`projects/${project._id}`}> {project.title} </a>
                </li>
              </ul>
            </div>

          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-semibold tracking-widest"> İletişim </h1>
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
      <div>
        <h1 className="text-white mt-10"> Barış Yesari</h1>
      </div>
    </div>
  );
};

export default Footer;
