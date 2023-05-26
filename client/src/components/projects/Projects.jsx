import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center font-roboto">
      <div className="w-4/5 flex justify-start flex-col">
        <h1 className="text-primary text-[36px] font-semibold mt-10 ml-2"> Projeler </h1>
        <p className="ml-2 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur sit harum mollitia nihil placeat, molestias, sed quia aliquid quod corrupti obcaecati et modi, ratione architecto. Assumenda ducimus tempore pariatur!</p>
      </div>
      <div className="w-4/5 flex flex-col justify-start ">
        {projects.map((project) => (
          <div key={project.id} className="w-full flex bg-gray-100  shadow-xl rounded-xl mt-24">
            <img className="rounded-xl w-5/12 ml-2 mt-2 mb-2" src={project.imgUrl} alt={project.name} />
            <div>
            <h1 className="mt-5 ml-5 text-primary text-[18px] font-semibold" > {project.name} </h1>
            <p className="mt-5 ml-5">
                {project.description}
            </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
