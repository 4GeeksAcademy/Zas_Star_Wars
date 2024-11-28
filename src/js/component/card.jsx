import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import 'animate.css';



const card = ({ name, uid, category, detailsUrl, onToggleFavorite }) => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    const [animationStarted, setAnimationStarted] = useState(false); // Controla si la animación inició
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isAlreadyFavorite = favorites.some(
            (favorite) => favorite.uid === uid && favorite.category === category
        );
        setIsFavorite(isAlreadyFavorite);
    }, [uid, category]);

    const handleAnimationStart = () => {
        setAnimationStarted(true); // Marca que la animación comenzó
        actions.setLoading(false); // Oculta el loader cuando inicia la animación
    };


    // AÑADIR FAVORITO
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const currentFavorite = { uid, category }; // Favorito actual

        // Verificar si el favorito ya existe
        const isAlreadyFavorite = favorites.some(
            (favorite) => favorite.uid === uid && favorite.category === category
        );

        if (isAlreadyFavorite) {
            // Si ya está, eliminarlo
            const updatedFavorites = favorites.filter(
                (favorite) => !(favorite.uid === uid && favorite.category === category)
            );
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setIsFavorite(false);

            if (onToggleFavorite) onToggleFavorite(uid, category);
        } else {
            // Si no está, agregarlo
            favorites.push(currentFavorite);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    const handleDetails = () => {
        // Puedes redirigir a una página de detalles con el ID del personaje
        navigate(`/${category}/${uid}`);
    }


    return (
        <div className="card m-3 text-center animate__animated animate__zoomIn" style={{ width: "12rem" }}
            onAnimationStart={handleAnimationStart}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`}
                className="card-img-top cardimg"
                alt={`${name}`}
                onError={(e) => e.target.src = `https://starwars-visualguide.com/assets/img/planets/11.jpg`}
                onClick={handleDetails}
            />
            <div className="card-body ">
                <h6 className="card-title">{name}</h6>
                <div className="d-flex flex-column justify-content-center">

                    <button className="Btn text-center" onClick={handleDetails}>

                    </button>



                    <i
                        className={`fa fa-solid fa-heart mt-3 ${isFavorite ? "text-danger" : "text-secondary"}`}
                        onClick={toggleFavorite}
                        style={{ cursor: "pointer" }}
                    />


                </div>
            </div>
        </div>
    );
};

export default card