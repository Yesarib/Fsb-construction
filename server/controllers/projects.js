import Project from '../models/project.js'

export const addProject = async(req,res) => {
    try {
        const {title,description,date,imageUrl} = req.body;
        const images = req.files.map(file => file.path);
        const newProject = new Project({
            title,
            description,
            date,
            imageUrl: images
        })
        await newProject.save();

        const project = await Project.find();
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const getProjects = async (req,res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
