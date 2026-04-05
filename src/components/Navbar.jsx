import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="m-2 flex justify-center">
        <div
          className="relative m-2 p-4 text-white flex justify-between items-center w-3/4 
          rounded-4xl 
          bg-black/30 
          backdrop-blur-2xl 
          border border-white/10 
          shadow-2xl 
          overflow-hidden"
        >
          <div
            className="absolute inset-0 
            bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-green-400/20 
            blur-2xl opacity-60 "
          ></div>

          <div
            className="absolute top-0 left-0 w-full h-1/2 
            bg-white/10 
            rounded-4xl 
            blur-md opacity-40"
          ></div>

          <div className="logo flex items-center gap-2 z-10">
            <img src="" alt="" />
            <div className="title font-semibold tracking-wide">Tracker</div>
          </div>

          <div className="navigation flex z-10">
            <ul className="list-none flex gap-5 items-center">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white/20 px-3 py-1.5 rounded-3xl"
                      : "opacity-70"
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white/20 px-3 py-1.5 rounded-3xl"
                      : "opacity-70"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white/20 px-3 py-1.5 rounded-3xl"
                      : "opacity-70"
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
