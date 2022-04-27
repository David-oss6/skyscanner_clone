import React, { useState } from "react";
import logo from "../../img/logo.png";
import "./header.css";

export default function Header() {
  const [size, setSize] = useState(0);
  const [hamb, setHamb] = useState(false);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  return (
    <header>
      <nav className="nav">
        <div className="title_input_container">
          <div className="title_container">
            <img className="logo" src={logo} />{" "}
            <h1 className="title">Skyscanner</h1>
          </div>
          {size > 600 ? (
            <div className="help_input_container">
              <a target="_blank" href="#" className="ayuda">
                Ayuda
              </a>
              <button className="header_btn">Idioma</button>
              <button className="header_btn sesion">Iniciar sesión</button>
            </div>
          ) : (
            <>
              <button onClick={() => setHamb(!hamb)}>Hamburguer</button>
              {hamb && (
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "0.7rem",
                    borderRadius: "7px",
                    border: "black solid 1px",
                    alignItems: "center",
                    gap: "0.2rem",
                    display: "flex",
                    flexFlow: "column",
                    position: "absolute",
                    right: "1rem",
                    top: "1.3rem",
                  }}
                >
                  <button className="header_btn">Idioma</button>
                  <button className="header_btn sesion">Iniciar sesión</button>
                  <a target="_blank" href="#" className="ayuda">
                    Ayuda
                  </a>
                  <button
                    onClick={() => setHamb(!hamb)}
                    className="header_btn sesion"
                  >
                    X
                  </button>
                </div>
              )}
            </>
          )}
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
