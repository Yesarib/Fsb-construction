import React, { useEffect, useState } from "react";
// import { projects } from "../../data";
import axios from 'axios'
import projectService from "../../context/project";
import { Link } from 'react-router-dom'


const Featured = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    await projectService.getProject().then((res) => {
      setProjects(res.data);
    })
  };

  useEffect(() => { 
    getProjects();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-36 font-roboto grid place-items-center">
      <div className="w-full md:w-4/6 flex flex-col justify-start">
        <h1 className="flex justify-start mb-5 text-primary font-bold text-[36px] md:text-4xl">
          {" "}
          Öne Çıkan Projeler{" "}
        </h1>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          repellat quasi modi alias mollitia ut voluptas consequatur! Odit qui
          eius, exercitationem sit quas vel quos ipsum, quibusdam tempora,
          ratione possimus!
        </p>
      </div>
      <div className="w-full md:w-4/6 flex justify-start mt-12 grid grid-cols-1 md:grid-cols-3">
        {projects.slice(0,3).map((project) => (
          <Link key={project._id} to={`/projects/${project._id}`}>
            <div
            className="ml-10" 
            key={project.id}>
                <div className="flex flex-col ">
                    <img className="w-96 h-60 rounded-xl" src={`https://fsb-website.onrender.com/${project.imageUrl}`} alt={project.name} />
                    <h1 className="font-bold mt-2 ml-1 text-[20px] md:text-lg"> {project.name} </h1>
                    <p className="w-4/5 ml-1 mt-2 text-secondary md:text-lg">
                        {project.description.slice(0,110)} ...
                    </p>
                    <p className="w-4/5 ml-1 mt-2 text-secondary md:text-lg"> {project.place} </p>
                </div>
            </div>
            </Link>
        ))}
      </div>
      <a href="/projects">
      <button className="mt-16 mb-5 w-72 h-12 bg-primary text-white text-[18px] rounded-2xl hover:bg-orange-700 hover:text-white"> Daha Fazla Proje </button>

      </a>
    </div>
  );
};

export default Featured;
