import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Cards";
import React from "react";
import axios from "axios";
import { apiKey } from "../../api/apikey";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async() => {
    const res = await axios.post(`${apiKey}/api/auth/login`,{email,password})
    if (res.data.success) {
      onLogin();
      nav("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </Card>
    </div>
  );
}
