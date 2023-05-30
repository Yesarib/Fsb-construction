import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import ProjectAdd from "./ProjectAdd";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/projectadd" element={<ProjectAdd />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {!isLoggedIn ? (
          <Route
            path="/adminpanel"
            element={<Navigate to="/admin" />} // Redirect to login if not logged in
          />
        ) : (
          <>
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/projectadd" element={<ProjectAdd />} />
          </>
        )}
      </Routes> */}
    </>
  );
}

export default Admin;
