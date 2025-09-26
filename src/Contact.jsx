import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useStableMemo } from "flowbite-react/helpers/resolve-theme";
import emailjs from "@emailjs/browser";

function Contact() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [des, setDes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    const templateParams = {
      user_name: user,
      user_email: email,
      user_message: des,
    };

    emailjs
      .send(
        "service_s3t72ei",
        "template_s2rkzza",
        templateParams,
        "2FltLCz2RIOoCQ6Yz"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setUser("");
        setEmail("");
        setDes("");
        setShowSuccess(true);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed top-5 right-5 bg-white border border-gray-300 px-4 py-2 rounded shadow-lg z-50 flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-t-2 border-orange-500 rounded-full animate-spin"></div>
          <span>Sending...</span>
        </div>
      )}

      <div className="flex flex-col items-center px-4 p-2">
        <div className="text-center mt-17">
          <h1 className="text-2xl shadow-lg shadow-orange-300 bg-orange-300 text-white uppercase font-bold p-2">
            Talk to us today
          </h1>
          <br />
          <p>Fill in the form below to reach us out</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-3xl p-6 border border-gray-300 rounded-xl shadow-lg shadow-orange-300 mt-20"
        >
          <input
            placeholder="Name"
            className="p-3 w-full border rounded-lg border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-0"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
          type="email"
            placeholder="Email"
            className="p-3 w-full border rounded-lg border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="p-9 mr-100 w-full border rounded-lg border-gray-300 focus:border-orange-500 focus:outline-none focus:ring-0"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
