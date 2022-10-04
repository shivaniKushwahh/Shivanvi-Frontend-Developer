import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./CardList";
import Navbar from "../components/Navbar";
function UpcommingCapsule() {
  const [data, setData] = useState(null);
  useEffect(() => {
    showData();
  }, []);
  function showData() {
    try {
      const result = axios
        .get("https://api.spacexdata.com/v3/capsules/upcoming")
        .then((result) => {
          console.log("DATA of past", result.data);
          setData(result.data);
        });
    } catch (error) {
      alert("Something went wrong");
    }
  }
  return (
    <div className="cardlist-container">
      <Navbar />
      <div class="card mt-2 shadow p-1 mb-1 bg-body rounded">
        <div class="card-body">
          <h3>Upcomming Capsule</h3>
        </div>
      </div>
      <div className="card">
        <CardList data={data} />
      </div>
    </div>
  );
}

export default UpcommingCapsule;
