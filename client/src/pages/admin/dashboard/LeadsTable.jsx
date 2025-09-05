import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiKey } from "../../../api/apikey";


export default function LeadsTable({ leads, updateLead }) {
   const [getLead, setGetLead] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getClasses = async () => {
      try {
        const res = await axios.get(`${apiKey}/api/auth/leads`);
        setGetLead(res.data);
      } catch (err) {
        console.error("Error fetching classes:", err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getClasses();
    }, []);
  
    if (loading) {
      return <p>Loading classes...</p>;
    }
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Leads</h2>
      <table className="w-full border">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Interest</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {getLead.map((l) => (
            <tr key={l.id}>
              <td className="border p-2">{l.name}</td>
              <td className="border p-2">{l.phone}</td>
              <td className="border p-2">{l.interest}</td>
              <td className="border p-2">
                <select
                  value={l.status}
                  onChange={(e) => updateLead(l.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="joined">Joined</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
