import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";



const Vehicles = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.setLoading(true);
        actions.getVehicles()
    }, [])
    return (

        <>
            <div className="container d-flex flex-wrap justify-content-center">
                {store.vehicles.map((vehicle, index) => (
                    <Card
                        key={index}
                        name={vehicle.name}
                        uid={vehicle.uid}
                        detailsUrl={vehicle.url}
                        category="vehicles"
                    />
                ))}

            </div>
        </>
    )
}
export default Vehicles;  