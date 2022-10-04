import React from "react";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
function CardList(props) {
  const data = props?.data;

  return (
    <div className="cardlist-container">
      <Cards cardData={data} />
    </div>
  );
}

export default CardList;
