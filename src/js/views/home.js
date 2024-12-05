import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import death_star from "../../img/death_star.png";
import "animate.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Link to={"/swtext"}>
      <div className="deathdiv d-flex ">
        <img
          className="col-12 col-md-3 death m-auto animate__animated animate__slideInDown"
          src={death_star}
        />
      </div>
    </Link>
  );
};
