import React, { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetInfo = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPlanet(uid);
    }, []);

    const { planet } = store;

    return (
        <div className="container col-12 col-md-6 jumbo animate__animated animate__zoomIn d-flex">
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                alt={"STAR WARS PLANET"}
                onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/planets/11.jpg")}
            />
            <div className="info m-5 ">

            <h1 className="text-warning">{planet?.properties?.name}</h1>
            <p className=" textInfo text-white"><strong>Climate:</strong> {planet?.properties?.climate}</p>
            <p className=" textInfo text-white"><strong>Terrain:</strong> {planet?.properties?.terrain}</p>
            <p className=" textInfo text-white"><strong>Diameter:</strong> {planet?.properties?.diameter}</p>
            <p className=" textInfo text-white"><strong>Gravity:</strong> {planet?.properties?.gravity}</p>
            <p className=" textInfo text-white"><strong>Orbital period:</strong> {planet?.properties?.orbital_period}</p>
            <p className=" textInfo text-white"><strong>Population:</strong> {planet?.properties?.population}</p>
            <p className=" textInfo text-white"><strong>Created:</strong> {planet?.properties?.created}</p>
            </div>
           
        </div>
    );
};

export default PlanetInfo;