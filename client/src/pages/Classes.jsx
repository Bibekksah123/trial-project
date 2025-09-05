import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getClasses = async () => {
    try {
      const res = await axios.get("http://localhost:7002/api/auth/classes");
      setClasses(res.data);
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
      <h1 className="text-2xl font-bold mb-4">Weekly Classes</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 border">Day</th>
            <th className="p-2 border">Trainer</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c, idx) => (
            <tr key={idx}>
              <td className="border p-2">{c.dayOfWeek}</td>
              <td className="border p-2">{c.trainerId?.name||"bibek"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
