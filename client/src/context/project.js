import axios from "axios";

const PROJECT_URL = "https://fsb-website.onrender.com/projects";

const getProject = () => {
    return axios.get(PROJECT_URL);
}

const projectService = { getProject};

export default projectService;
