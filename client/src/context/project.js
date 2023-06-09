import axios from "axios";

const PROJECT_URL = "https://fsb-website.onrender.com/projects" || "https://localhost:5000/projects";
const SINGLEPROJECT_URL = (id) => `https://fsb-website.onrender.com/projects/getSingleProject/${id}` || `https://localhost:5000/projects/${id}`;

const getProject = () => {
    return axios.get(PROJECT_URL);
}

const getSingleProject = (id) => {
    return axios.get(SINGLEPROJECT_URL(id));
} 

const projectService = { getProject, getSingleProject};

export default projectService;
