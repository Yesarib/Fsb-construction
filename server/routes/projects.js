import express from "express";
import multer from "multer";
import { addProject, deleteProject, getProjects } from "../controllers/projects.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "resimler-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get("/", getProjects);
router.post("/addProject", upload.single('resimler'), addProject);
router.delete("/deleteProject/:id", deleteProject)

export default router;
