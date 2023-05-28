import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminPanel from "./AdminPanel";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default Admin;
