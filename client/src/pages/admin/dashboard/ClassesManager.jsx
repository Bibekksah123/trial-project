import axios from "axios";
import React, { useState } from "react";

export default function ClassesManager({ classes, addClass }) {
  const [title, setTitle] = useState("");
  const [trainerId, setTrainerId] = useState(""); // should come from DB ideally
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleAdd = async() => {
    if (
      !title ||
      !dayOfWeek ||
      !startTime ||
      !endTime ||
      !capacity
    ) {
      return alert("Please fill all fields");
    }

    // new class object similar to MongoDB schema
    const newClass = {
      title,
      trainerId,
      dayOfWeek,
      startTime,
      endTime,
      capacity: Number(capacity),
    };

    addClass(newClass);
    // reset form
    setTitle("");
    setTrainerId("");
    setDayOfWeek("");
    setStartTime("");
    setEndTime("");
    setCapacity("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Classes Manager</h2>

      {/* Input form */}
      <div className="grid md:grid-cols-6 gap-2 mb-4">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          placeholder="Trainer ID"
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          placeholder="Day of Week"
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Class
      </button>

      {/* Table */}
      <table className="w-full border text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Trainer ID</th>
            <th className="p-2 border">Day</th>
            <th className="p-2 border">Start</th>
            <th className="p-2 border">End</th>
            <th className="p-2 border">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c._id || c.id}>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.trainerId}</td>
              <td className="border p-2">{c.dayOfWeek}</td>
              <td className="border p-2">{c.startTime}</td>
              <td className="border p-2">{c.endTime}</td>
              <td className="border p-2">{c.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
