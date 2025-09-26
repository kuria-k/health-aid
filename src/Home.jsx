import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import docsimg from './images/doc&patient.jpg'

// import docImage from '.../assets/images/doc&patient.jpg';

function Home() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={docsimg}
        alt="Doctor and Patient"
        className="w-full h-full object-cover"
      />
      <section className="absolute inset-0 text-gray-100 body-font bg-black/60">
        <Navbar />
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center h-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Your Trusted Guide for Condition-Based Medication
              Insights
            </h1>
            <p className="mb-8 leading-relaxed max-w-xl">
              Welcome to our platform—where clarity meets care, and your health
              journey begins with informed choices. Whether you're seeking
              relief from chronic discomfort, managing a newly diagnosed
              condition, or simply exploring treatment options, you've arrived
              at a space built to empower you with knowledge and confidence.
            </p>
            <div className="flex justify-center gap-2">
              <NavLink to ="/login" className="bg-orange-400 hover:bg-orange-500 text-white p-2 text-xl w-30 text-center rounded-sm">Login</NavLink>
              <NavLink to ="/signup" className="bg-gray-200 hover:bg-gray-300 text-black p-2 text-xl w-30 text-center rounded-sm">Sign up</NavLink>
            </div>
          </div>
        </div>
      </section>{" "}
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-center text-3xl font-bold bg-orange-400 w-100 rounded-2xl text-white ml-140">
          STEP-BY-STEP GUIDE
        </h1>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-orange-400 mb-1 text-xl">
                  Get started
                </h2>
                <p class="leading-relaxed">
                  Ready to explore your medication options? Click the get
                  started button to start of you medical assistance journey.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-orange-400 mb-1 text-xl">
                  Log-in / Sign-up
                </h2>
                <p class="leading-relaxed">
                  New here? Create an account to personalize your experience and
                  access full medical insights. Already registered? Log in to
                  continue.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-orange-400 mb-1 text-xl">
                  Search for medication
                </h2>
                <p class="leading-relaxed">
                  You're in! Let’s find the right medication for you just enter
                  a drug name to get started.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-orange-400 mb-1 text-xl">
                  Search for symptom
                </h2>
                <p class="leading-relaxed">
                  Tell us what you're feeling—headache, fever, fatigue—and we’ll
                  help you understand what it might mean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-center text-3xl font-bold bg-orange-400 w-100 rounded-2xl text-white ml-140">
          TESTIMONIALS
        </h1>
      </div>{" "}
      <br />
      <br />
      <section className="flex flex-wrap justify-center gap-30 p-4">
        <div class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-orange-400">
          <div class="z-10 absolute w-full h-full peer"></div>
          <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-300 transition-all duration-500"></div>
          <div class="absolute flex flex-wrap text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-300 transition-all duration-500">
            <br />
            <br />
            <br />I had recurring headaches and wasn’t sure what to take. After
            signing up, I searched my symptoms and got clear suggestions with
            drug options. It felt like having a doctor in my pocket. The
            interface is simple, and I trust the information.
          </div>
          <div class="w-full h-full items-center justify-center flex uppercase ml-4">
            <h1>
              Amina Yusuf{" "}
              <span className="ml-14 text-sm">
                <br />
                Patient <span className="text-white">(mombasa)</span>
              </span>
            </h1>
          </div>
        </div>
        <div class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-orange-400">
          <div class="z-10 absolute w-full h-full peer"></div>
          <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-300 transition-all duration-500"></div>
          <div class="absolute flex flex-wrap text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-17 w-36 h-44 rounded-full bg-orange-300 transition-all duration-500">
            {" "}
            <br /> <br /> <br />
            This platform has transformed how I support my patients. The drug
            lookup is fast, accurate, and the alternative suggestions are
            incredibly helpful, especially in cases where stock is limited. It’s
            intuitive, reliable, and a game-changer for everyday clinical
            decisions.
            <br />
            Uiverse
          </div>
          <div class="w-full h-full items-center justify-center flex uppercase ml-4">
            <h1>
              Dr Mercy.M
              <span className="ml-14 text-sm">
                <br />
                Practioner
              </span>
            </h1>
          </div>
        </div>
        <div class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-orange-400">
          <div class="z-10 absolute w-full h-full peer"></div>
          <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-orange-300 transition-all duration-500"></div>
          <div class="absolute flex flex-wrap text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-orange-300 transition-all duration-500">
            {" "}
            <br />
            <br />I was prescribed ibuprofen but wanted to understand more
            before taking it. I used the system and instantly got all the
            details, plus safer alternatives. It gave me confidence and helped
            me make an informed choice. I now use it regularly to check my
            medications.
          </div>
          <div class="w-full h-full items-center justify-center flex uppercase ml-4">
            <h1>
              John Muindi{" "}
              <span className="ml-14 text-sm">
                <br />
                Patient <span className="text-white">(Kiambu)</span>
              </span>
            </h1>
          </div>
        </div>
      </section>{" "}
      <br />
      <br /><br /><br />
      <section class="text-gray-600 body-font bg-gray-700 rounded-2xl">
  <div class="container px-2 py-15 mx-auto">
    <div class="flex flex-wrap -m-10 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7M</h2>
        <p class="leading-relaxed text-white">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed text-white">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35k</h2>
        <p class="leading-relaxed text-white">Conditions</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">40k</h2>
        <p class="leading-relaxed text-white">Products</p>
      </div>
    </div>
  </div>
</section>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:w-1/4">
            <iframe
              height="480"
              width="700"
              className="object-cover object-center rounded"
              src="https://www.youtube.com/embed/4jErp3U1GXU"
            ></iframe>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center lg:ml-45">
            {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before you Get started
            </h1> */}
            <p class="mb-8 leading-relaxed bg-orange-400 text-white text-lg p-9 rounded-4xl">
              <span className="font-bold text-xl">Struggling to remember drug names?</span><br /> This video breaks down simple,
              effective strategies to help you retain medication names with
              ease. Whether you're a patient trying to stay informed or a
              student navigating pharmacology, you'll learn memory hacks, suffix
              patterns, and smart tips that make drug names stick. Watch and
              boost your confidence in seconds!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
