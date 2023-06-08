import axios from "axios";

const PROJECT_URL = "https://fsb-website.onrender.com/projects";
const SINGLEPROJECT_URL = (id) => `https://fsb-website.onrender.com/projects/getSingleProject/${id}`;

const getProject = () => {
    return axios.get(PROJECT_URL);
}

const getSingleProject = (id) => {
    return axios.get(SINGLEPROJECT_URL(id));
} 

const projectService = { getProject, getSingleProject};

export default projectService;
