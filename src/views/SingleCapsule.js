import React from "react";
import "../styles/SingleCapsule.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function SingleCapsule() {
  const id = useParams();
  const [capsuleData, setCapsuleData] = useState(null);
  const onMount = () => {
    try {
      axios
        .get(`https://api.spacexdata.com/v3/capsules/${id?.id}`)
        .then((data) => {
          setCapsuleData(data?.data);
        });
    } catch (error) {
      alert("OOOPS!!! Something went wrong");
    }
  };
  useEffect(() => {
    onMount();
  }, []);
  return (
    <div className="singleCapsule">
      <Navbar />
      <div class="card mb-3 mt-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.spacex.com/static/images/share.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{capsuleData?.capsule_id}</h5>
              <p class="card-text">{capsuleData?.details}</p>
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Capsule Serial No.</th>
                      <th scope="col">Status</th>
                      <th scope="col">Orignal Launch</th>
                      <th scope="col">Landing</th>
                      <th scope="col">Reuse_count</th>
                      <th scope="col">Missions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{capsuleData?.capsule_serial}</th>
                      <td>{capsuleData?.status}</td>
                      <td>
                        {capsuleData?.original_launch === null
                          ? "Not avaialable"
                          : capsuleData?.original_launch}
                      </td>
                      <td>{capsuleData?.landings}</td>
                      <td>{capsuleData?.reuse_count}</td>
                      {capsuleData?.missions.length !== 0
                        ? capsuleData?.missions?.map((item) => (
                            <td>
                              <span class="badge bg-success">{item?.name}</span>
                            </td>
                          ))
                        : "Not available"}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCapsule;
