import React from "react";
import { Link } from "react-router-dom";


export default function Navbar({ isAuthed, setIsAuthed }) {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center px-4 py-3">
        <div className="font-bold text-lg">🏋️‍♂️ Kathmandu gym</div>
        <div className="ml-auto flex gap-2">
          <Link to="/" className="px-3 py-2 hover:bg-slate-100 rounded-lg">
            Home
          </Link>
          <Link to="/plans" className="px-3 py-2 hover:bg-slate-100 rounded-lg">
            Plans
          </Link>
          <Link
            to="/classes"
            className="px-3 py-2 hover:bg-slate-100 rounded-lg"
          >
            Classes
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 hover:bg-slate-100 rounded-lg"
          >
            Contact
          </Link>
          <Link
            to="/admin/login"
            className="px-3 py-2 hover:bg-slate-100 rounded-lg"
          >
            Admin
          </Link>
          {isAuthed && (
            <button
              onClick={() => setIsAuthed(false)}
              className="px-3 py-2 rounded-lg text-red-600 border border-red-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
