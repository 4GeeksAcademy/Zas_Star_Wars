import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "animate.css"
import { useParams } from "react-router";



const CharInfo = () => {

    const { store, actions } = useContext(Context)
    const { uid } = useParams();

    useEffect(() => {

        actions.getChar(uid)
    }, [])

    const { character } = store;





    return (
        <div className="container col-12 flex-wrap col-md-8 jumbo animate__animated animate__zoomIn d-flex">
            <img className="imgjumbo" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                alt="STAR WARS CHARACTER"
                onError={(e) => (e.target.src = "https://via.placeholder.com/400")} />
                <div className="info m-5 ">

            <h1 className="text-warning">{character?.properties?.name}</h1>
            <p className="textInfo text-white"><strong>Birth Year:</strong> {character?.properties?.birth_year}</p>
            <p className="textInfo text-white"><strong>Eye Color:</strong> {character?.properties?.eye_color}</p>
            <p className="textInfo text-white"><strong>Gender:</strong> {character?.properties?.gender}</p>
            <p className="textInfo text-white"><strong>Hair Color:</strong> {character?.properties?.hair_color}</p>
            <p className="textInfo text-white"><strong>Height:</strong> {character?.properties?.height} cm</p>
            <p className="textInfo text-white"><strong>Homeworld:</strong> {character?.properties?.homeworld}</p>
            <p className="textInfo text-white"><strong>Mass:</strong> {character?.properties?.mass} kg</p>
            <p className="textInfo text-white"><strong>Skin Color:</strong> {character?.properties?.skin_color}</p>
                </div>

        </div>

    )
}

export default CharInfo;