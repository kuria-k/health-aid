import React from "react";
import { NavLink } from "react-router-dom";
import healthIcon from "./images/health-insurance.png";
import { getAuth } from "firebase/auth/web-extension";
 
const auth = getAuth();

function Anav() {
  const getName = () => {
    const email = auth.currentUser?.email;
    if (email) {
      const emailName = email.split("@")[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    return "User";
  };
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-row gap-2">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={healthIcon} alt="logo" className="h-9" />
              <div className="flex flex-row gap-2">
                 <p className="text-lg text-gray-800">Welcome back,</p> 
              <p className="font-bold text-orange-500 rounded-full w-[40px] h-[30px] text-center mx-auto mt-[2px]">
                {getName()}
              </p>
              </div>
            </a>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
            <NavLink
              to="/dash"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg ${
                  isActive ? "bg-orange-400 text-white font-bold" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/symptom"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg ${
                  isActive ? "bg-orange-400 text-white font-bold" : "text-black"
                }`
              }
            >
              Symptom Assistant
            </NavLink> */}
            <NavLink
              to="/medinputs"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg ${
                  isActive ? "bg-orange-400 text-white font-bold" : "text-black"
                }`
              }
            >
              Med inputs
            </NavLink>
            {/* <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg ${
                  isActive ? "bg-orange-400 text-white font-bold" : "text-black"
                }`
              }
            >
              Blogs
            </NavLink> */}
            <NavLink
              to="/login"
              onClick={() => {
                signOut(auth);
                setUser(null);
              }}
              className="border border-gray-900 rounded-lg p-3 bg-gray-100 hover:text-white hover:bg-orange-300"
            >
              Log-out
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Anav;
