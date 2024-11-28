import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

const Favorites = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Obtener favoritos de localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);

        // Asegurarte de que las listas estén cargadas
        actions.getCharacters();
        actions.getPlanets();
        actions.getVehicles();
    }, []);

    const handleRemoveFavorite = (uid, category) => {
        const updatedFavorites = favorites.filter(
            (favorite) => !(favorite.uid === uid && favorite.category === category)
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites); // Actualiza el estado
    };

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {favorites.length > 0 ? (
                favorites.map((favorite, index) => {
                    // Buscar el elemento en el store correspondiente según la categoría
                    let item;
                    if (favorite.category === "characters") {
                        item = store.characters.find((char) => char.uid === favorite.uid);
                    } else if (favorite.category === "planets") {
                        item = store.planets.find((planet) => planet.uid === favorite.uid);
                    } else if (favorite.category === "vehicles") {
                        item = store.vehicles.find((vehicle) => vehicle.uid === favorite.uid);
                    }

                    
                    return (
                        item && (
                            <Card
                                key={`${favorite.category}-${favorite.uid}`}
                                name={item.name}
                                uid={item.uid}
                                detailsUrl={item.url}
                                category={favorite.category}
                                onToggleFavorite={handleRemoveFavorite}
                            />
                        )
                    );
                })
            ) : (
                <p>No tienes favoritos guardados.</p>
            )}
        </div>
    );
};

export default Favorites;