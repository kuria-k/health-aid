import React, { useEffect, useState } from "react";
import meds from "./images/medications.jpg";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Hnav from "./Hnav";

function Medication() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const drugFetch = async () => {
      try {
        const query = await getDocs(collection(db, "drugs"));
        const drugArray = query.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDrugs(drugArray);
      } catch (error) {
        alert(error.message);
      }
    };
    drugFetch();
  }, []);
  return (
    <>
     <Hnav/>
      <div className="relative bg-black/60">
        <img
          src={meds}
          alt="medications"
          className="h-100 w-full object-cover"
        />
      </div>
      <div className="absolute inset-0  flex mb-83 gap-3">
        {/* <div className="absolute inset-0 text-5xl font-bold">
            <div className="mt-3"> */}
              <NavLink
                to={"/students"}
                className=" text-orange-500 hover:bg-orange-500 hover:text-white border border-none text-center p-1 w-20 mr-2 rounded-xl"
              >
                Back Home
              </NavLink>
            {/* </div>
          <h1 className="text-white">
            Welcome To your{" "}
            <span className="text-orange-500 font-itallic">Medication Aid</span>
          </h1>
        </div> */}
        {/* <input
          type="text"
          placeholder="search here"
          className="w-100 h-10 ml-140 mt-50 rounded-3xl text-center border border-orange-500 focus:border-orange-600 focus:outline-orange-500 shadow-2xl shadow-orange-500 bg-white"
        />
        <button
          type="submit"
          className="mt-50 text-white bg-orange-900 h-10 p-2 rounded-2xl "
        >
          Search
        </button> */}
      </div>{" "}
      <br />
      <br />
      <br />
      <h1 className="text-center text-2xl">RESULTS</h1>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Drug Database</h2>
        <div className="grid gap-4">
          {drugs.map((drug) => (
            <div
              key={drug.id}
              className="border p-4 rounded shadow shadow-orange-200"
            >
              <h3 className="text-3xl text-orange-500 font-semibold ">
                {drug.Name}
              </h3>
              <p className="text-xl">
                <strong>Generic:</strong> {drug.Generic}
              </p>
              <p className="text-xl">
                <strong>Class:</strong> {drug.Class}
              </p>
              <p className="text-xl">
                <strong>Formulation:</strong> {drug.Formulation}
              </p>
              <p className="text-xl">
                <strong>Strength:</strong> {drug.Strength}
              </p>
              <p className="text-xl">
                <strong>Description:</strong> {drug.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Medication;
