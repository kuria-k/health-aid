import React, { useState } from "react";
import "./App.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import healthIcon from "./images/health-insurance.png";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(async () => {
      //       else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      //   alert("Password must contain at least one special character");
      // }
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const logs = res.user;
        setUser(logs);
        if (logs.email === "admin@gmail.com") {
          navigate("/dash");
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            alert("Password must contain at least one special character");
          }
        } else {
          navigate("/students");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };
  return (
    <>
      <Navbar />
      <div className="mt-3">
        {/* <NavLink
          to={"/"}
          className=" text-orange-500 hover:bg-orange-500 hover:text-white border border-none text-center p-1 w-20 ml-2 rounded-xl"
        >
          Back Home
        </NavLink> */}
      </div>
      <div
        class=""
        className="max-w-md w-full mx-auto mt-22 sm:mt-20 p-6  sm:p-9 border border-gray-300 shadow-2xl shadow-orange-200 rounded-lg bg-white text-center"
      >
        {/* {user ? (
          <div className="text-green-600 font-bold text-xl">
            Welcome, {user.email}!
          </div>
        ) : ( */}
        <form action="" onSubmit={handleLogin}>
          <div>
            <img src={healthIcon} alt="" className="h-9  ml-44 " />
            <p>Welcome back!</p>
            <p className="text-sm text-gray-400">
              Please enter your credentials below
            </p>
          </div>{" "}
          <br />
          <div className="grid grid-rows-1 gap-1">
            <input
              type="email"
              placeholder="email"
              className="p-3 w-full border rounded-lg border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="p-3 w-full border rounded-lg border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </div>
          <br />
          <div>
            <p
              className="text-sm
            "
            >
              Dont have an account?{" "}
              <NavLink
                to="/signup"
                className="text-indigo-500 hover:text-indigo-700 font-bold"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
