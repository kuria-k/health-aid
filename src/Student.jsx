import { Carousel } from "flowbite-react";
import Hnav from "./Hnav";
import Footer from "./Footer";
import students from "./images/medical students image.jpg";
import lab from "./images/Lab.jpg";
import hosp from "./images/hosp.jpg";
import garden from "./images/garden.jpg";
import { NavLink } from "react-router-dom";


function Students() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Hnav/>
    
      <div className="relative w-full mt-4">
        <Carousel
          autoplay
          loop
          transition={{ duration: 1 }}
          className="h-[500px] rounded-xl overflow-hidden"
        >
          <img
            src={students}
            alt="Medical students 1"
            className="object-cover w-full h-full"
          />
          <img
            src={lab}
            alt="Medical students 2"
            className="object-cover w-full h-full"
          />
          <img
            src={hosp}
            alt="Medical students 3"
            className="object-cover w-full h-full"
          />
          <img
            src={garden}
            alt="Medical students 4"
            className="object-cover w-full h-full"
          />
        </Carousel>

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <p className="text-lg max-w-3xl font-bold">
            Where future physicians are forged. This platform is your gateway to
            mastering medicine from foundational sciences to clinical
            excellence. Dive into curated resources, interactive modules, and
            collaborative tools designed to elevate your understanding and
            sharpen your skills. Your journey to becoming a compassionate,
            competent doctor starts here.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-20 px-4 py-10 md:px-10 lg:px-20">
        <div className="relative flex flex-col items-center w-[300px] sm:w-[100px] h-[400px] border-4 border-black rounded-3xl bg-gray-50 p-5 shadow-[5px_5px_2.5px_6px_rgba(253,206,125,1)]">
          <span className="border border-black bg-black w-24 h-2 rounded-br-xl rounded-bl-xl mb-4" />
          <span className="absolute -right-2 top-16 border-4 border-black h-7 w-3 rounded-md" />
          <span className="absolute -right-2 bottom-28 border-4 border-black h-10 w-3 rounded-md" />
          <div className="w-full text-center mt-2">
            <p className="uppercase text-orange-500 font-bold underline mb-4 text-lg">
              Symptom Assistant
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-800 text-base font-medium text-left px-2">
              <li className="hover:text-orange-500 transition-colors">
                Enter Your Age
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Select Your Gender
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Describe Your Symptom
              </li>
              <li className="hover:text-orange-500 transition-colors">
                View Possible Conditions
              </li>
              <NavLink
                className="bg-orange-400 p-2 text-white hover:bg-orange-500 rounded-2xl block text-center"
                to="/symptom"
              >
                Symptom Assistant
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-[300px] sm:w-[100px] h-[400px] border-4 border-black rounded-3xl bg-gray-50 p-5 shadow-[5px_5px_2.5px_6px_rgba(253,206,125,1)]">
          <span className="border border-black bg-black w-24 h-2 rounded-br-xl rounded-bl-xl mb-4" />
          <span className="absolute -right-2 top-16 border-4 border-black h-7 w-3 rounded-md" />
          <span className="absolute -right-2 bottom-28 border-4 border-black h-10 w-3 rounded-md" />
          <div className="w-full text-center mt-2">
            <p className="uppercase text-orange-500 font-bold underline mb-4 text-lg">
              Meds Data
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-800 text-base font-medium text-left px-2">
              <li className="hover:text-orange-500 transition-colors">
                Get the Medication Name
              </li>
              <li className="hover:text-orange-500 transition-colors">
                View the Generic Name
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Check the Strength
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Read a Short Description
              </li>
              <NavLink
                className="bg-orange-400 p-2 text-white hover:bg-orange-500 rounded-2xl block text-center"
                to="/medication"
              >
                MedData
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-[300px] sm:w-[100px] h-[400px] border-4 border-black rounded-3xl bg-gray-50 p-5 shadow-[5px_5px_2.5px_6px_rgba(253,206,125,1)]">
          <span className="border border-black bg-black w-24 h-2 rounded-br-xl rounded-bl-xl mb-4" />
          <span className="absolute -right-2 top-16 border-4 border-black h-7 w-3 rounded-md" />
          <span className="absolute -right-2 bottom-28 border-4 border-black h-10 w-3 rounded-md" />
          <div className="w-full text-center mt-2">
            <p className="uppercase text-orange-500 font-bold underline mb-4 text-lg">
              Health Blogs
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-800 text-base font-medium text-left px-2">
              <li className="hover:text-orange-500 transition-colors">
                Explore Topics That Matter
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Read and Learn
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Stay Informed
              </li>
              <li className="hover:text-orange-500 transition-colors">
                Read a Short Description
              </li>
              <NavLink
                className="bg-orange-400 p-2 text-white hover:bg-orange-500 rounded-2xl block text-center"
                to="/blogs"
              >
                Health Blogs
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Students;
