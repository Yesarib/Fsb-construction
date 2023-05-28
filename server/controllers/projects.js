import Project from '../models/project.js'

export const addProject = async(req,res) => {
    try {
        const {title,description,date,place,adress } = req.body;
        const images = req.files.map(file => file.path);
        const newProject = new Project({
            title,
            description,
            place,
            date,
            adress,
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

export const deleteProject = async(req,res) => {    
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({message:"Project doesnt exist"})
        }
        await Project.deleteOne({ _id: id });
        res.status(200).json({ message: "Project deleted successfuly" });
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}
