import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Anime from "../pages/Anime";
import ChartDetails from "../pages/ChartDetails";
import DetailsAnime from "../pages/DetailsAnime";

import Navbar from "./Navbar";

const AnimePage = () => {
  return (
    <div>
      <HashRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              GetAnime
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <Navbar></Navbar>
              </ul>
            </div>
          </div>
        </nav>
        <header className="d-flex container justify-content-between"></header>
        <Routes>
          <Route exact path="/anime" element={<Anime />}></Route>
          <Route
            exact
            path="anime/queryanime/:nameanime"
            element={<Anime />}
          ></Route>
          <Route
            exact
            path="anime/queryanime/:nameanime/page/:page"
            element={<Anime />}
          ></Route>
          <Route
            exact
            path="anime/getanime/:id"
            element={<DetailsAnime />}
          ></Route>
          <Route exact path="anime/page/:page" element={<Anime />}></Route>
          <Route
            exact
            path="chart/details/:id"
            element={<ChartDetails />}
          ></Route>
          <Route exact path="characters" element={<Anime />}></Route>
          <Route exact path="characters/page/:page" element={<Anime />}></Route>
          <Route
            exact
            path="characters/querychart/:chart"
            element={<Anime />}
          ></Route>
          <Route
            exact
            path="characters/querychart/:chart/page/:page"
            element={<Anime />}
          ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default AnimePage;
