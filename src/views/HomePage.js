import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CardList from "./CardList";
import axios from "axios";
function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    showData();
  }, []);
  function showData() {
    try {
      const result = axios
        .get("https://api.spacexdata.com/v3/capsules")
        .then((result) => {
          setData(result.data);
        });
    } catch (error) {
      alert("Something went wrong");
    }
  }
  return (
    <div className="conatiner">
      <Navbar />
      <div class="card mt-2 shadow p-1 mb-1 bg-body rounded">
        <div class="card-body">
          <h3>Home</h3>
        </div>
      </div>
      <div className="card">
        <CardList data={data} />
      </div>
    </div>
  );
}

export default Home;
