import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Cards";
import { apiKey } from "../api/apikey";

export default function Plans() {
  const [plans, setPlans] = useState([]); // ✅ use array, not string

  const getLeadPlans = async () => {
    try {
      const res = await axios.get(`${apiKey}/api/plans`);
      setPlans(res.data);
    } catch (err) {
      console.error("Error fetching plans:", err);
    }
  };

  useEffect(() => {
    getLeadPlans();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan._id} className="p-6 space-y-3">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold">NPR {plan.priceNPR}</p>
            <p className="text-sm text-gray-600">
              Duration: {plan.durationDays} days
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {plan.features?.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-slate-900 text-white py-2 rounded-xl">
              Choose Plan
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
