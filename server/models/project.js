import mongoose from "mongoose";

const projeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: [String],
    required: true,
  },
});

const Project = mongoose.model("Proje", projeSchema);

export default Project;
