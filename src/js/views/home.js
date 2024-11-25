import React, { useState, useEffect, useContext } from "react";
import Navbar from "../component/navbar";
import { Context } from "../store/appContext";
import death_star from "../../img/death_star.png"
import 'animate.css';


export const Home = () => {
  return (
  
    <div className="deathdiv d-flex ">
      <img className="death m-auto animate__animated animate__slideInDown" src={death_star}/>
      
    </div>

    
    
    

   

    

  );
};
