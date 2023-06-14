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
  };

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
      navigate("/admin");
    }
  }, [navigate]);

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  if (currentUser === null) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/adminpanel" />} />
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/projectadd" element={<ProjectAdd />} />
    </Routes>
  );
}
