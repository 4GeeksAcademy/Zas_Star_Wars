import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import 'animate.css';

export const Navbar = () => {
  
  return (
    <div className="d-flex justify-content-center">
    <nav className="navbar navbar-expand ">
      
      <button className="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
      <div className="text-center my-4 animate__animated animate__zoomIn collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            `navlink text-decoration-none mx-3 ${isActive ? "active-link" : ""}`
          }
        >
          <strong>CHARACTERS</strong>
        </NavLink>

        <NavLink
          to="/planets"
          className={({ isActive }) =>
            `navlink text-decoration-none mx-3 ${isActive ? "active-link" : ""}`
          }
        >
          <strong>PLANETS</strong>
        </NavLink>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            `navlink text-decoration-none mx-3 ${isActive ? "active-link" : ""}`
          }
        >
          <strong>VEHICLES</strong>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `navlink text-decoration-none mx-3 ${isActive ? "active-link" : ""}`
          }
        >
          <strong>FAVORITES</strong>
        </NavLink>
        </ul>
      </div>
    </nav>
    </div>
  );
};
