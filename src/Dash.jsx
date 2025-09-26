import React, { useEffect, useState } from "react";
import Anav from "./Anav";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function Dash() {
  const [drugCount, setDrugCount] = useState(0);

  useEffect(() => {
    const fetchDrugCount = async () => {
      const snapshot = await getDocs(collection(db, "drugs"));
      setDrugCount(snapshot.size);
    };
    fetchDrugCount();
  }, []);



  return (
    <div>
      <Anav />
      <div className="bg-white p-6 rounded-xl shadow-md shadow-orange-200 text-center max-w-9xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Leaderboard</h2>
        <p className="text-lg text-gray-700 mb-2 flex flex-col gap-2">
          Total Drugs in Database:{" "}
          <span className="font-bold bg-orange-500 text-white max-w-20 text-center ml-[700px] p-3 rounded-xl">{drugCount}</span>
        </p>

        {/* <p className="text-lg text-gray-700">
          Total Inputs Submitted: <span className="font-bold"></span>
        </p> */}
      </div>{" "}
      <br />
      <br />
      <div className="bg-orange-400 p-5 text-white text-3xl font-bold text-center">
        <h1>GET TO EXPAOUND YOUR KNOWLEDGE AND ALSO A REMINDER</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-row flex-wrap gap-20">
        {/* card 1 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Qm5kB5X70oA?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Curious about Hypertension?
            </h5>
            <p className="text-base font-light text-gray-700">
              Tap below to explore <strong>key insights</strong>,{" "}
              <strong>lifestyle tips</strong>, and{" "}
              <strong>treatment options</strong> that could make a real
              difference in your health journey.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=Qm5kB5X70oA">
                  Watch Now
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TdK0jRFpWPQ?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Struggling with Acid Reflux or GERD?
            </h5>
            <p className="text-base font-light text-gray-700">
              Tap below to uncover <strong>simple strategies</strong>,{" "}
              <strong>diet tips</strong>, and <strong>treatment options</strong>{" "}
              to help soothe your symptoms and restore comfort.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=TdK0jRFpWPQ">
                  Get Relief
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/59aJJ6N2a3c?autoplay=1&mute=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Dealing with a Fungal Infection?
            </h5>
            <p className="text-base font-light text-gray-700">
              Tap below to learn how <strong>antifungal treatments</strong>{" "}
              work, what <strong>symptoms to watch for</strong>, and how to keep
              your skin healthy and protected.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=59aJJ6N2a3c">
                  Start Healing
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* card 4 */}
        <div class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PzfLDi-sL3w?autoplay=1&mute=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Managing asthma starts with understanding it
            </h5>
            <p class="text-base font-light text-gray-700">
              Tap below to discover <strong>helpful tips</strong>,{" "}
              <strong>treatment options</strong>, and{" "}
              <strong>ways to breathe easier</strong> every day.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span class="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=PzfLDi-sL3w">
                  Watch Now
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* card 5 */}
        <div class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/w8JnDhp83gA?autoplay=1&mute=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Living with ADHD? You're not alone.
            </h5>
            <p class="text-base font-light text-gray-700">
              Tap below to explore <strong>practical tips</strong>,{" "}
              <strong>treatment options</strong>, and{" "}
              <strong>ways to harness your strengths</strong> while managing
              daily challenges.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span class="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=w8JnDhp83gA">
                  Get Support
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* card 6 */}

        <div class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/j5Sl8LyI7k8?autoplay=1&mute=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Tired of sleepless nights?
            </h5>
            <p class="text-base font-light text-gray-700">
              Tap below to explore <strong>proven tips</strong>,{" "}
              <strong>calming routines</strong>, and{" "}
              <strong>treatment options</strong> that can help you reclaim
              restful sleep and wake up refreshed.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span class="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=j5Sl8LyI7k8">
                  Sleep Better
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* card 7 */}
        <div class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xbEqpYTkuXg?autoplay=1&mute=1"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Battling breakouts? You're not alone.
            </h5>
            <p class="text-base font-light text-gray-700">
              Tap below to learn what <strong>causes acne</strong>, explore{" "}
              <strong>treatment options</strong>, and find{" "}
              <strong>tips to help your skin feel clearer</strong> and more
              confident.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span class="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=j5Sl8LyI7k8">
                  Clear Your Skin
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* card 8 */}

        <div class="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BqOaG9VuP_I?autoplay=1&mute=1"
              frameborder="0"
              allow="autoplay; "
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Worried about your child’s fever?
            </h5>
            <p class="text-base font-light text-gray-700">
              Tap below to learn what <strong>signs to watch for</strong>, how
              to <strong>soothe symptoms</strong>, and when to{" "}
              <strong>seek medical care</strong>—because peace of mind starts
              with the right information.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button class="group w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-orange-300 hover:bg-orange-400 shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span class="flex items-center gap-2">
                <a href="https://www.youtube.com/watch?v=BqOaG9VuP_I">
                  Feel Reassured
                </a>
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
