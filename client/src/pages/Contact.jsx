import { useState } from "react";
import Card from "../components/Cards";
import React from "react";
import axios from "axios"
import { apiKey } from "../api/apikey";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Zumba");

  const handleSubmit =async () => {
     await axios.post(`${apiKey}/api/contact`, { name, phone, interest })
    setName("");
    setPhone("");
    alert("Contact submitted!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <Card>
        <div className="space-y-3">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option>Zumba</option>
            <option>Yoga</option>
            <option>Weightlifting </option>
          </select>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
}
