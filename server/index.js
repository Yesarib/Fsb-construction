// mongodb => yesaribaris23 xd2qc4qG5PUvor1i
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectRoutes from './routes/projects.js'

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));




app.use('projects', projectRoutes);






const Port = process.env.Port || 5000;
mongoose.connect(process.env.Mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(Port, () => console.log(`Server on: ${Port}`))
}).catch((err) => console.log(`${err} did not connect`))




