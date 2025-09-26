import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Anav from "./Anav";

function MedsInput() {
  const [drug, setDrug] = useState("");
  const [generic, setGeneric] = useState("");
  const [classy, setClassy] = useState("");
  const [forms, setForms] = useState("");
  const [strength, setStrength] = useState("");
  const [description, setDescription] = useState("");
  const [meds, setMeds] = useState([]);
  const [selectedDrugId, setSelectedDrugId] = useState(null);
  const [editData, setEditData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const drugData = {
      Name: drug,
      Generic: generic,
      Class: classy,
      Formulation: forms,
      Strength: strength,
      Description: description,
      Timestamp: new Date(),
    };

    if(!drug || !generic || !classy ||!forms ||!strength ||!description){
        alert("Kindly fill in the spaces in the form")
        return;
    }
    try {
      await addDoc(collection(db, "drugs"), drugData);
      alert("Drug data added successfully!");
      fetchDrugs(); 
    } catch (error) {
      alert("Failed to add drug data.");
    }
  };

  const fetchDrugs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "drugs"));
      const drugArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMeds(drugArray);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchDrugs();
  }, []);

  const promptEdit = (drug) => {
    setSelectedDrugId(drug.id);
    setEditData({
      Name: drug.Name,
      Generic: drug.Generic,
      Class: drug.Class,
      Formulation: drug.Formulation,
      Strength: drug.Strength,
      Description: drug.Description,
    });
    setShowConfirm(true);
  };

  const handleConfirmUpdate = async () => {
    try {
      const drugRef = doc(db, "drugs", selectedDrugId);
      await updateDoc(drugRef, editData);
      alert("Drug updated successfully!");
      setShowConfirm(false);
      fetchDrugs();
    } catch (error) {
      alert("Failed to update drug.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this drug?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "drugs", id));
      alert("Drug deleted successfully!");
      fetchDrugs();
    } catch (error) {
      alert("Failed to delete drug.");
    }
  };

  return (
    <div>
      <Anav/>
      <div className="mt-3">
        <NavLink
          to={"/"}
          className=" text-orange-500 hover:bg-orange-500 hover:text-white border border-none text-center p-1 w-20 ml-2 rounded-xl"
        >
          Back Home
        </NavLink>
      </div>
      <div className="flex justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 w-full max-w-6xl p-4 border border-gray-300 rounded-xl shadow-lg shadow-orange-400"
        >
          <div className="flex flex-row flex-wrap gap-5">
            <input
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
            placeholder="Drug Name"
           className="p-3 border rounded w-full sm:w-[48%] lg:w-[30%] ml-auto mx-auto"

          />
          <input
            value={generic}
            onChange={(e) => setGeneric(e.target.value)}
            placeholder="Generic"
            className="p-3 border rounded w-full sm:w-[48%] lg:w-[30%] ml-auto mx-auto"

          />
          <input
            value={classy}
            onChange={(e) => setClassy(e.target.value)}
            placeholder="Class"
            className="p-3 border rounded w-full sm:w-[48%] lg:w-[30%] ml-auto mx-auto"

          />
          <input
            value={forms}
            onChange={(e) => setForms(e.target.value)}
            placeholder="Formulation"
            className="p-3 border rounded w-full sm:w-[48%] lg:w-[40%] mx-auto ml-auto"

          />
          <input
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            placeholder="Strength"
            className="p-3 border rounded w-full sm:w-[48%] lg:w-[40%] mx-auto ml-auto"

          /> 
          </div> <br />
          <div>
             <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-3 border rounded h-32  md:w-400 lg:w-200 resize-none ml-30 justify-center"
          /> <br />
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded hover:bg-orange-600 mx-auto"
          >
            Add Drug
          </button>
          </div>
        </form>
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4 text-center bg-orange-300 text-white p-3
        ">Drug Database</h2>
        <div className="grid gap-4">
          {meds.map((drug) => (
            <div key={drug.id} className="border p-4 rounded shadow">
              <h3 className="text-2xl font-semibold text-orange-500 underline">{drug.Name}</h3>
              <p>
                <strong>Generic:</strong> {drug.Generic}
              </p>
              <p>
                <strong>Class:</strong> {drug.Class}
              </p>
              <p>
                <strong>Formulation:</strong> {drug.Formulation}
              </p>
              <p>
                <strong>Strength:</strong> {drug.Strength}
              </p>
              <p>
                <strong>Description:</strong> {drug.Description}
              </p>
              <p><strong>Added on:</strong> {new Date(drug.Timestamp.seconds * 1000).toLocaleDateString()}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => promptEdit(drug)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(drug.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Edit Drug</h2>
            <div className="flex flex-col gap-3">
              <input
                value={editData.Name}
                onChange={(e) =>
                  setEditData({ ...editData, Name: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                value={editData.Generic}
                onChange={(e) =>
                  setEditData({ ...editData, Generic: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                value={editData.Class}
                onChange={(e) =>
                  setEditData({ ...editData, Class: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                value={editData.Formulation}
                onChange={(e) =>
                  setEditData({ ...editData, Formulation: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                value={editData.Strength}
                onChange={(e) =>
                  setEditData({ ...editData, Strength: e.target.value })
                }
                className="p-2 border rounded"
              />
              <textarea
                value={editData.Description}
                onChange={(e) =>
                  setEditData({ ...editData, Description: e.target.value })
                }
                className="p-2 border rounded resize-none h-24"
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleConfirmUpdate}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Confirm Update
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MedsInput;
