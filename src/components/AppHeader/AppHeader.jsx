// Import From React Router
import { NavLink, Link } from "react-router";

// Import from React
import { useState, useContext } from "react";

// Import Hook Context From srs
import { useGlobal } from "../../contexts/GlobalContext";

// Import Logo From srs
import logo from "../../assets/logo/logo.png";

// Import Style CSS
import './appHeader.css';

// Import Data from srs
import dataHeader from "../../assets/data/dataLayout";

// Import Components From srs
import AppNavItemList from "../AppNavItemList";
import AppNavSearch from "../AppNavSearch";
import AppNavLogo from "../AppNavLogo";

export default function AppHeader() {

  // Destructuring object from useGlobal
  const { theme, toggleTheme } = useGlobal();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid">
            <AppNavLogo logo={logo} width="200px" height="100px" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                  dataHeader.map(link => <AppNavItemList key={link.id} link={link} />)
                }
              </ul>

              {/* Search bar hidden */}
              <div className="d-none">
                <AppNavSearch />
              </div>
            </div>

            {/* Button space */}
            <div className="d-flex flex-column mb-3">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <button className="btn btn-theme" onClick={() => toggleTheme()}>
                <span><i className={`bi bi-emoji-sunglasses${theme === 'dark' ? "-fill" : ""}`}></i></span>
              </button>
            </div>
          </div>
        </nav>
      </header >
    </>
  )
}