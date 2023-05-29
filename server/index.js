// mongodb => yesaribaris23 xd2qc4qG5PUvor1i
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import projectRoutes from './routes/projects.js'
import multer from 'multer';
import dotenv from 'dotenv'
import Project from './models/project.js'
import { projects } from './data.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { addProject } from './controllers/projects.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads',express.static(path.join(__dirname,'public/uploads')))




app.use('/projects', projectRoutes);



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'public/uploads')
    },
    filename: function (req,file,cb) {
        cb(null,file.originalname)
    }
});
const upload = multer( { storage });
app.post('/addProject',upload.single('picture'), addProject)





const Port = process.env.PORT || 5000;
// const Mongo_url = "mongodb+srv://yesaribaris23:xd2qc4qG5PUvor1i@fsb-cluster.v9czz1b.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(Port, () => console.log(`Server on: ${Port}`))
    //Project.insertMany(projects)
}).catch((err) => console.log(`${err} did not connect`))




