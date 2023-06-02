import axios from "axios";

const PROJECT_URL = "http://localhost:5000/projects";

const getProject = () => {
    return axios.get(PROJECT_URL);
}

const projectService = { getProject};

export default projectService;
