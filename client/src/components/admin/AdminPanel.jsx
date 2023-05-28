import React,{useState} from "react";
import Sidebar from "./Sidebar";
import OverView from './OverView'
import Projects from './Project'

const AdminPanel = () => {
  const [selectedContent, setSelectedContent] = useState("overview");

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };
  return (
    <div>
      <div className="flex">
        <Sidebar onContentChange={handleContentChange} />
          {selectedContent === "overview" && <OverView />}
          {selectedContent === "projects" && <Projects />}
      </div>
    </div>
  );
};

export default AdminPanel;
