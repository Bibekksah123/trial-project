import { useState } from "react";
import Card from "../components/Cards";
import Select from "../components/Select";
import Input from "../components/Input";
import React from "react";
import axios from "axios";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("");
  const [source, setsource] = useState("");
  const [interest, setInterest] = useState("weight loss");
  const status="new"

  const handleSubmit = async () => {
    await axios.post("http://localhost:7002/api/leads", {
      name,
      phone,
      email,
      interest,
      status,
      source,
      message,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-bold">Get Fit With FitNepal</h1>
        <p className="mt-2 text-slate-600">
          Join the most modern gym in Kathmandu today.
        </p>
      </div>
      <Card>
        <h2 className="text-xl font-semibold mb-3">Free Trial</h2>
        <div className="space-y-3">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            label="Interest"
            options={["weight loss", "muscle gain", "general fitness"]}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />

          <Input
            label="source"
            value={source}
            onChange={(e) => setsource(e.target.value)}
          />
          <Input
            label="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
