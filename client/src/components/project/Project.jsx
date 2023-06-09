import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectService from '../../context/project'

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState("")

    const getProject = async () => {
        await projectService.getSingleProject(id).then((res) => {
            setProject(res.data)
        })
    };

    useEffect(() => {
        getProject();
    },[]);

    console.log(project);

  return (
    <div className='w-full flex justify-center items-center mt-16 grid place-items-center'>
        <div className='w-full md:w-9/12 flex flex-col ml-14' >
            <h1 className='text-primary font-semibold text-[36px] md:text-4xl'> {project.title} </h1>
            <div className='flex mt-10'>
                <img className='w-5/12 rounded-3xl shadow-2xl' src={`https://fsb-website.onrender.com/${project.imageUrl}`} alt="" />
                <div className='flex flex-col ml-10 mt-3'>
                <p className='text-[18px] md:text-sm lg:text-[18px]'> {project.description} </p>
                <h1 className='text-[18px] mt-3 md:text-sm lg:text-[18px]'> Şehir : {project.place} </h1>
                <p className='text-[18px] mt-3 md:text-sm lg:text-[18px]'> Adres : {project.adress} </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Project