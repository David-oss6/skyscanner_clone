import React from "react";
import logo from "../../img/logo.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="title_input_container">
          <div className="title_container">
            <img className="logo" src={logo} />{" "}
            <h1 className="title">Skyscanner</h1>
          </div>
          <div className="help_input_container">
            <a target="_blank" href="#" className="ayuda">
              Ayuda
            </a>
            <button className="header_btn">Idioma</button>
            <button className="header_btn sesion">Iniciar sesión</button>
          </div>
        </div>
        <ul className="header_ul">
          <li>Vuelos</li>
          <li>Hoteles</li>
          <li>Alquiler de coches</li>
        </ul>
      </nav>
    </header>
  );
}
