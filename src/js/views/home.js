import React from "react";
import { useNavigate } from "react-router";
import death_star from "../../img/death_star.png"
import 'animate.css';
import { Link } from "react-router-dom";




export const Home = () => {
  const navigate = useNavigate()
  return (
  
      <Link to={"/swtext"}>
      
    <div className="deathdiv d-flex ">
      <img className="death m-auto animate__animated animate__slideInDown" src={death_star} onClick={navigate`/swtext`}/>
    </div>

      </Link>
    
    
    

   

    

  );
};
