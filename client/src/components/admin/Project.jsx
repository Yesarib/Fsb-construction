import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5; 

  const getProjects = async () => {
    await axios.get("http://localhost:5000/projects").then((res) => {
      setProjects(res.data);
    });
  };

  const deleteProject = async (id) => {
    axios.delete(`http://localhost:5000/projects/deleteProject/${id}`)
    .then((res) => {
      console.log(res);  
      alert("Başarıyla silindi");
      getProjects();
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
    <div className="flex w-full  justify-center items-center">
      <div className="flex flex-col w-full ">
        <h1 className="text-primary text-[36px] font-bold ml-16 mt-16">
          Projeler
        </h1>
        <table className="w-11/12 border-collapse border-slate-500 border-separate border-spacing-20 ">
          <thead className="justify-center">
            <tr>
              <th>#</th>
              <th>Proje Adı</th>
              <th>Açıklama</th>
              <th>Sil</th>
              <th>Güncelle</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map((project) => (
              <tr key={project._id}>
                <td>{project._id}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>
                  <button onClick={() => deleteProject(project._id)} className="w-24 bg-red-500 text-white rounded-xl">Sil</button>
                </td>
                <td>
                  <button className="w-24 bg-green-500 text-white rounded-xl">Güncelle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          className="flex space-x-20 justify-center"
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
        <a href="/admin/projectadd" className="flex mt-5 mb-10 ml-16 bg-primary w-72 h-12 text-center justify-center items-center text-white ml-10 rounded-3xl font-semibold text-[18px] tracking-wider"> Yeni Proje </a>
      </div>
    </div>
  );
};

export default Project;
