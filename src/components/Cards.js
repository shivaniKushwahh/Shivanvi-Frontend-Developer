import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cards.css";
function Cards(props) {
  const navigate = useNavigate();
  const singleCardData = props?.cardData;
  const handleSeeMore = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="singlecard-container shadow p-3 mb-5 bg-body rounded">
      {singleCardData &&
        singleCardData?.map((item) => (
          <div
            class="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <img
              src="https://www.spacex.com/static/images/share.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{item?.capsule_id}</h5>
              <p class="card-text">{item?.details}</p>
              <span>launch date : {item?.original_launch}</span>
              <div>
                <button
                  class="btn btn-primary"
                  onClick={() => handleSeeMore(item?.capsule_serial)}
                >
                  see more
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
