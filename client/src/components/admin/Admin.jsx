import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import ProjectAdd from "./ProjectAdd";

function Admin() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
      navigate("/admin/adminpanel"); // Kullanıcı giriş yapmışsa otomatik olarak /adminpanel yoluna yönlendirilir.
    }
    else{
      navigate("/admin")
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={currentUser ? <Navigate to="/adminpanel" /> : <Login />} />
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/projectadd" element={<ProjectAdd />} />
    </Routes>
  );
}

export default Admin;
