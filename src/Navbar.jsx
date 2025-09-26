import React from "react";
import healthIcon from "./images/health-insurance.png";
import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <header class="text-gray-600 body-font bg-white">
      <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 ml-10 md:mb-0">
          <img src={healthIcon} class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900 text-gray-900">
            Health <span className="text-orange-500 font-bold">Aid</span>
          </span>
        </a>
        <nav class="md:ml-auto mr-20 gap-9 flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            style={({isActive}) => ({
              color: isActive ? "white" : "black",
              fontWeight: isActive ? "bold" : "normal",
              background: isActive ? "orange" : "white",
              padding: isActive ? "9px" : "none",
              borderRadius: isActive ? "2vw" : "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              fontWeight: isActive ? "bold" : "normal",
              background: isActive ? "orange" : "white",
              padding: isActive ? "9px" : "none",
              borderRadius: isActive ? "2vw" : "none",
            })}
          >
            Login
          </NavLink>
           <NavLink
            to={'/contact'}
            style={({isActive}) => ({
              color: isActive ? "white" : "black",
              fontWeight: isActive ? "bold" : "normal",
              background: isActive ? "orange" : "white",
              padding: isActive ? "9px" : "none",
              borderRadius: isActive ? "2vw" : "none",
            })}
          >
            Contact
          </NavLink>

          {/* <NavLink
            to={"/signup"}
            style={({isActive}) => ({
              color: isActive ? "white" : "black",
              fontWeight: isActive ? "bold" : "normal",
              background: isActive ? "orange" : "white",
              padding: isActive ? "9px" : "none",
              borderRadius: isActive ? "2vw" : "none",
            })}
          >
            Sign Up
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
