import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import 'animate.css';



const card = ({ name, uid, category, detailsUrl })=>{
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)

  const [animationStarted, setAnimationStarted] = useState(false); // Controla si la animación inició

  const handleAnimationStart = () => {
    setAnimationStarted(true); // Marca que la animación comenzó
    actions.setLoading(false); // Oculta el loader cuando inicia la animación
  };

  // const handleDetails = () => {
  //   // Puedes redirigir a una página de detalles con el ID del personaje
  //   navigate(`/character/${uid}`);


  return (
    <div className="card m-3 text-center animate__animated animate__zoomIn" style={{ width: "12rem" }}
    onAnimationStart={handleAnimationStart}>
        <img 
            src={`https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`} 
            className="card-img-top cardimg" 
            alt={`${name}`} 
            // onError={(e) => e.target.src = "https://via.placeholder.com/150"}
        />
        <div className="card-body ">
            <h6 className="card-title">{name}</h6>
            <div className="d-flex flex-column justify-content-center">

            <button className="Btn text-center">
                
            </button>
            
                <i className="fa fa-solid fa-heart mt-3 text-secondary"/>
            

            
            
            </div>
            {/* <button 
                className="btn btn-primary" 
                onClick={handleDetails}
            >
                Detalles
            </button> */}
        </div>
    </div>
);
};

export default card