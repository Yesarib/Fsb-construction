import React, {useState , useEffect} from "react";
// import { projects } from "../../data";
import axios from 'axios'
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom'
import projectService from '../../context/project'


const Projects = () => {
  const [projects, setProjects] = useState([])
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5; 

  const getProjects = async () => {
    await projectService.getProject().then((res) => {
      setProjects(res.data);
      console.log(res.data);
    })
    // await axios.get("http://localhost:5000/projects").then((res) => {
    //   setProjects(res.data);
    //   console.log(res.data);
    // });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const pagesVisited = pageNumber * projectsPerPage;
  const displayedProjects = projects.slice(
    pagesVisited,
    pagesVisited + projectsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  return (
    <div className="flex flex-col items-center justify-center font-roboto">
      <div className="w-4/6 flex justify-start flex-col mt-16">
        <h1 className="text-primary text-[36px] font-semibold mt-10 ml-2"> Projeler </h1>
        <p className="ml-2 mt-2">
        İnşaat Şirketi olarak yılların verdiği tecrübe ve uzmanlıkla birlikte birbirinden etkileyici projeleri sizin için hayata geçiriyoruz. Detaylara özen gösteren ekiplerimiz, modern tasarımlar ve kaliteli malzemelerle projelerinizi tamamlıyor. Sizin hayallerinizi gerçeğe dönüştürmek için buradayız.        </p>
      </div>
      <div className="w-4/6 flex flex-col justify-start ">        
        {displayedProjects.map((project) => (
          <Link key={project._id} to={`/projects/${project._id}`}>
          <div className="w-full flex bg-gray-100  shadow-xl rounded-xl mt-24">
            <img className="rounded-xl w-5/12 ml-2 mt-2 mb-2" src={`http://localhost:5000/${project.imageUrl}`} alt={project.name} />
            <div>
            <h1 className="mt-5 ml-5 text-primary text-[18px] font-semibold" > {project.title} </h1>
            <p className="mt-5 ml-5">
                {project.description}
            </p>
            </div>            
          </div>
          </Link>
        ))}
      </div>
      <ReactPaginate
          className="flex space-x-20 justify-center mt-10"
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"text-primary text-[18px] font-semibold"}
        />
    </div>
  );
};

export default Projects;
