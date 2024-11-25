import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Headerlogo from "./component/headerlogo";
import Characters from "./views/characters";
import Loader from "./component/Loader";
import Planets from "./views/planets";
import Vehicles from "./views/vehicles";
import Favorites from "./views/favorites";
import videoStars from "../js/component/vid/stars.mp4";

import injectContext, { Context } from "./store/appContext";

const Layout = () => {
  const { store, actions } = useContext(Context)
  return (
    <div>
      <BrowserRouter basename="">
     
        <div className="container vid">
          <video
            loop
            muted
            autoPlay
            src={videoStars}
            type="video/mp4"
			      className="video-background"
          ></video>
        </div>
        <Headerlogo/>
        <Navbar />
        {store.loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/vehicles" element={<Vehicles />} />
		      <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1 className="text-danger text-center">Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
