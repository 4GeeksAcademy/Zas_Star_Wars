import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";



const Planets = ()=>{

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.setLoading(true);
        actions.getPlanets()
    },[])
    return(

<>
<div className="container d-flex flex-wrap justify-content-center">
{store.planets.map((planet, index) => (
                <Card 
                    key={index} 
                    name={planet.name} 
                    uid={planet.uid} 
                    detailsUrl={planet.url} 
                    category = "planets"
                />
            ))}

</div>
</>
    )
}
export default Planets; 