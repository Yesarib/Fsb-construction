import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState,useEffect } from "react";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import ProjectAdd from "./ProjectAdd";

function Admin() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  }

  useEffect(() => {
    const user = getCurrentUser();
    if(user) {
      setCurrentUser(user);
    }
  },[])

  return (
    <>
    <Routes>
        {currentUser ? (
          <>
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/projectadd" element={<ProjectAdd />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        
        
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
