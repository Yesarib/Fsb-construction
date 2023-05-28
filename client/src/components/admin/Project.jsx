import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5; // Sayfa başına görüntülenen proje sayısı

  const getProjects = async () => {
    await axios.get("http://localhost:5000/projects").then((res) => {
      setProjects(res.data);
    });
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
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col w-full">
        <h1 className="text-primary text-[36px] font-bold ml-8 mt-16">
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
                  <button>Sil</button>
                </td>
                <td>
                  <button>Güncelle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          className="flex space-x-20 justify-center"
          previousLabel={"Önceki"}
          nextLabel={"Sonraki"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        <button className="flex mt-5 mb-10 bg-primary w-72 h-12 text-center justify-center items-center text-white ml-10 rounded-3xl font-semibold text-[18px] tracking-wider">
          Yeni Proje
        </button>
      </div>
    </div>
  );
};

export default Project;
