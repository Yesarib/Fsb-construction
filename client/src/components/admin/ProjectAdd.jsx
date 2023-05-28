import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const ProjectAdd = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const addProject = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("place", city);
      formData.append("description", desc);
      formData.append("adress", address);
      formData.append("resimler", image);

      const response = await axios.post(
        "http://localhost:5000/projects/addProject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      if (response.status === 201) {
        alert("Project added successfuly");
        navigate("/admin/adminpanel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  return (
    <div className="flex">
      <Sidebar />
      <form
        onSubmit={addProject}
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-4/6">
            <h1 className="text-primary text-[24px] font-bold flex justify-start tracking-widest">
              Proje Ekle
            </h1>
            <div className="flex flex-col mt-10">
              <div className="flex justify-evenly">
                <div className="flex flex-col">
                  <div>
                    <label className="ml-1 text-[17px] tracking-wider">
                      Başlık
                    </label>
                  </div>
                  <input
                    className="w-96 mt-2 border-2 border-gray-500 rounded-xl"
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <label className="ml-1 text-[17px] tracking-wider">
                      Şehir
                    </label>
                  </div>
                  <input
                    className="w-96 mt-2 border-2 border-gray-500 rounded-xl"
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-evenly mt-10">
                <div className="flex flex-col">
                  <div>
                    <label className="ml-1 text-[17px] tracking-wider">
                      Açıklama
                    </label>
                  </div>
                  <textarea
                    className="w-96 mt-2 border-2 border-gray-500 rounded-xl"
                    type="text"
                    name="desc"
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <label className="ml-1 text-[17px] tracking-wider">
                      Adres
                    </label>
                  </div>
                  <textarea
                    className="w-96 mt-2 border-2 border-gray-500 rounded-xl"
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-evenly mt-10">
                <div className="flex flex-col">
                  <div>
                    <label className="ml-1 text-[17px] tracking-wider">
                      Fotoğraf
                    </label>
                  </div>
                  <input
                    className="w-96 mt-2"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="w-full flex justify-center">
                <button className="mt-16 text-white bg-primary w-80 h-10 rounded-3xl tracking-wider font-semibold hover:bg-orange-700">
                  Proje Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectAdd;
