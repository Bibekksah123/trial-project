import { useState } from "react";
import LeadsTable from "./LeadsTable";
import ClassesManager from "./ClassesManager";
import React from "react";

export default function Dashboard({ onLogout }) {
  const [leads, setLeads] = useState(
    JSON.parse(localStorage.getItem("fit.leads") || "[]")
  );
  const [classes, setClasses] = useState(
    JSON.parse(localStorage.getItem("fit.classes") || "[]")
  );

  const updateLead = (id, status) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    localStorage.setItem("fit.leads", JSON.stringify(updated));
  };

  const addClass = (c) => {
    const updated = [{ id: crypto.randomUUID(), ...c }, ...classes];
    setClasses(updated);
    localStorage.setItem("fit.classes", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={onLogout} className="text-red-600">
          Logout
        </button>
      </div>
      <LeadsTable leads={leads} updateLead={updateLead} />
      <ClassesManager classes={classes} addClass={addClass} />
    </div>
  );
}
