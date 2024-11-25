import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";



const Favorites = ()=>{

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getFavs()
    },[])
    return(

<>
</>
    )
}
export default Favorites;