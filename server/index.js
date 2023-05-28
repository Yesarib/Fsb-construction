// mongodb => yesaribaris23 xd2qc4qG5PUvor1i
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import projectRoutes from './routes/projects.js'
import Project from './models/project.js'
import { projects } from './data.js'

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());




app.use('/projects', projectRoutes);






const Port = process.env.Port || 5000;
const Mongo_url = "mongodb+srv://yesaribaris23:xd2qc4qG5PUvor1i@fsb-cluster.v9czz1b.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(Port, () => console.log(`Server on: ${Port}`))
    //Project.insertMany(projects)
}).catch((err) => console.log(`${err} did not connect`))




