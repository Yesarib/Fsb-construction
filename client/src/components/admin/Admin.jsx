import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import ProjectAdd from "./ProjectAdd";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/projectadd" element={<ProjectAdd />} />
      </Routes>
    </>
  );
}

export default Admin;
