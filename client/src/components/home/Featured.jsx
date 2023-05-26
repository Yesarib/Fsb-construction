import React, { useEffect, useState } from "react";
import { projects } from "../../data";

const Featured = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projects);
  }, []);
  console.log(project);
  return (
    <div className="w-full flex flex-col items-center justify-center mt-36">
      <div className="w-4/5 flex flex-col justify-start">
        <h1 className="flex justify-start mb-5 text-primary font-bold text-[36px]">
          {" "}
          Öne Çıkan Projeler{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          repellat quasi modi alias mollitia ut voluptas consequatur! Odit qui
          eius, exercitationem sit quas vel quos ipsum, quibusdam tempora,
          ratione possimus!
        </p>
      </div>
      <div className="w-4/5 flex justify-start mt-10">
        {project.slice(0,3).map((project) => (
            <div
            className="ml-10" 
            key={project.id}>
                <div className="flex flex-col ">
                    <img className="w-4/5 rounded-xl" src={project.imgUrl} alt={project.name} />
                    <h1 className="font-bold mt-2 ml-1 text-[20px]"> {project.name} </h1>
                    <p className="w-4/5 ml-1 mt-2 text-secondary">
                        {project.description}
                    </p>
                    <p className="w-4/5 ml-1 mt-2 text-secondary"> {project.place} </p>
                </div>
            </div>
        ))}
      </div>
      <button className="mt-16 mb-5 w-72 h-12 bg-primary text-white text-[18px] rounded-2xl hover:bg-orange-500 hover:text-white"> Daha Fazla Proje </button>
    </div>
  );
};

export default Featured;
