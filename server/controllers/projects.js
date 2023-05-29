import Project from "../models/project.js";
import path from "path";

export const addProject = async (req, res) => {
  try {
    const { title, description, place, adress } = req.body;
    const file = req.file;
    console.log(file);
    if (!file) {
      return res.status(400).json({ message: "Dosya yüklenmedi" });
    }

    try {
      const filename = file.filename ;
      const filePath = path.join("uploads", filename);
      console.log(filePath);
      const newProject = new Project({
        title,
        description,
        place,
        adress,
        imageUrl: filePath,
      });

      await newProject.save();
      res.status(201).json(newProject);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project doesnt exist" });
    }
    await Project.deleteOne({ _id: id });
    res.status(200).json({ message: "Project deleted successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
