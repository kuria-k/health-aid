import React, { useEffect, useState } from "react";
import Hnav from "./Hnav";

function HealthBlogs() {
  const [blogsTopic, setBlogTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=8235a94978ab49a8aecff4d6f31b5c6c"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const items = data?.articles ?? [];
      setBlogTopics(items);
      console.log("Fetched data:", data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hnav/>
      <h2 className="text-3xl text-white font-bold bg-orange-400 p-9">Stay on <span className="text-5xl italic" >Top</span> of the News</h2>
      <p className="text-2xl text-orange-400 bg-white mx-20">Get to know whats going on in the Health world</p>
      {loading ? (
        <p>Loading blog topics...</p>
      ) : blogsTopic.length > 0 ? (
        <ul>
          {blogsTopic.map((item, index) => (
            <div className="">
              <li key={index} className="">
                <div className="bg-gray-100 shadow-lg shadow-orange-50 rounded-sm flex flex-col mb-7 p-5"> <br />
                  <strong>{item.title}</strong>
                  <br />
                  <em>{item.source.name}</em>
                  <br />
                  <a href={item.url} target="_blank" rel="noopener noreferrer" >
                    <button className="btns">
                      Read More
                    </button>
                  </a>
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No blog topics available at the moment.</p>
      )}
    </div>
  );
}

export default HealthBlogs;
