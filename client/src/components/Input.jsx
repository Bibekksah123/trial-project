import React from "react";


export default function Input({ label, value, onChange, type = "text" }) {
  return (
    <label className="block text-sm">
      <div className="mb-1">{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </label>
  );
}
