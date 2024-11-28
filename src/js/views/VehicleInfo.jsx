import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "animate.css"


const VehicleInfo = () => {

    const { store, actions } = useContext(Context)
    const { uid } = useParams();

    useEffect(() => {
        actions.getVehicle(uid)
    }, [])

    const { vehicle } = store;

    return(
        <div className="container col-12 col-md-6 jumbo animate__animated animate__zoomIn d-flex">
            <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                alt={"STAR WARS PLANET"}
                onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
            />
            <div className="info m-5 ">

            <h1 className="text-warning">{vehicle?.properties?.name}</h1>
            <p className=" textInfo text-white"><strong>Model:</strong> {vehicle?.properties?.model}</p>
            <p className=" textInfo text-white"><strong>Vehicle class:</strong> {vehicle?.properties?.vehicle_class}</p>
            <p className=" textInfo text-white"><strong>Manufacturer:</strong> {vehicle?.properties?.manufacturer}</p>
            <p className=" textInfo text-white"><strong>Cost in credits:</strong> {vehicle?.properties?.cost_in_credits}</p>
            <p className=" textInfo text-white"><strong>Cargo capacity:</strong> {vehicle?.properties?.cargo_capacity}</p>
            <p className=" textInfo text-white"><strong>Max atmosphering speed:</strong> {vehicle?.properties?.max_atmosphering_speed}</p>
            
            </div>
           
        </div>
    )

}

export default VehicleInfo;