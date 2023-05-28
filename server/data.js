import mongoose from "mongoose";

const projectIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const projects = [
    {
        id:projectIds[0],
        title: "Proje 1",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 1",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"    
    },
    {
        id:projectIds[1],
        title: "Proje 2",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 2",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"
    },
    {
        id:projectIds[2],
        title: "Proje 3",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 3",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"
    },
    {
        id:projectIds[3],
        title: "Proje 4",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 4",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"

    },
    {
        id:projectIds[4],
        title: "Proje 5",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 5",  
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"    
    },
    {
        id:projectIds[5],
        title: "Proje 6",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 6",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"        
    },
    {
        id:projectIds[6],
        title: "Proje 7",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 7",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"        
    },
    {
        id:projectIds[7],
        title: "Proje 8",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.  ",
        place: "Elazığ / Merkez",
        adress: "adress 8",
        imageUrl : "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/22/thumbs_b_c_01cddc2e1ddebbebb15dafc204bb53f0.jpg"        
    },
]