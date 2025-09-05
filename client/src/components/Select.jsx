import React from "react";


export default function Select({ label, options, value, onChange }) {
  return (
    <label className="block text-sm">
      <div className="mb-1">{label}</div>
      <select
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}
