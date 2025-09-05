import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Login from "./pages/admin/Login";
import React from "react";
import Navbar from "./components/Navbar";
import Classes from "./pages/Classes";
import Dashboard from "./pages/admin/dashboard/Dashboard";

export default function App() {
  const [isAuthed, setIsAuthed] = useState(
    localStorage.getItem("fit.authed") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("fit.authed", "true");
    setIsAuthed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("fit.authed");
    setIsAuthed(false);
  };

  return (
    <div>
      <Navbar isAuthed={isAuthed} setIsAuthed={setIsAuthed} onLogout={handleLogout} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans/>} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/admin/dashboard"
            element={
              isAuthed ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}
