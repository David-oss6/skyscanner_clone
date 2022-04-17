import "./styles/header.css";
import "./styles/main.css";
import "./styles/article.css";
import logo from "./img/logo.png";
import mapaCovid from "./img/mapaCovid.png";
import { useState, useRef } from "react";

function App() {
  const [goRetBtn, setGoRetBtn] = useState({
    idaVuelta: true,
    soloIda: false,
    multiplesDestinos: false,
  });
  const handlegoRetBtn = (x) => {
    if (x === 1 && !goRetBtn.idaVuelta) {
      setGoRetBtn({
        idaVuelta: true,
        soloIda: false,
        multiplesDestinos: false,
      });
    }
    if (x === 2 && !goRetBtn.soloIda) {
      setGoRetBtn({
        idaVuelta: false,
        soloIda: true,
        multiplesDestinos: false,
      });
    }
    if (x === 3 && !goRetBtn.multiplesDestinos) {
      setGoRetBtn({
        idaVuelta: false,
        soloIda: false,
        multiplesDestinos: true,
      });
    }
  };
  return (
    <div>
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
      {/* EMPIEZA CONTENIDO PRINCIPAL  ********************/}
      <main className="main">
        <h2>Tu viaje empieza aqui</h2>
        <div className="buscador_container">
          <div className="idavuelta_div">
            <label htmlFor="">
              <input
                className="goRet_box"
                type="checkbox"
                onClick={() => handlegoRetBtn(1)}
                checked={goRetBtn.idaVuelta ? true : false}
              />
              Ida y vuelta
            </label>
            <label htmlFor="">
              <input
                className="goRet_box"
                type="checkbox"
                onClick={() => handlegoRetBtn(2)}
                checked={goRetBtn.soloIda ? true : false}
              />
              Solo ida
            </label>
            <label htmlFor="">
              <input
                className="goRet_box"
                type="checkbox"
                onClick={() => handlegoRetBtn(3)}
                checked={goRetBtn.multiplesDestinos ? true : false}
              />
              Múltiples destinos
            </label>
          </div>

          {/* EMPIEZA INPUTS ORGIEN DESTINO FECHAS ****************/}

          <div className="ruta_fecha_div">
            <div className="origen">
              <label className="input_label_container" htmlFor="">
                De:
                <input className="ruta_inputs primer_input" type="text" />
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Añade aeropuertos cercanos
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Solo vuelos directos
              </label>
            </div>
            <div className="destino">
              <label className="input_label_container" htmlFor="">
                A:
                <input className="ruta_inputs " type="text" />
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Añade aeropuertos cercanos
              </label>
            </div>
            <div className="salida">
              <label className="input_label_container" htmlFor="">
                Salida:
                <input className="ruta_inputs salida_input" type="date" />
              </label>
            </div>
            <div className="regreso">
              <label className="input_label_container" htmlFor="">
                Regreso:
                <input
                  className="ruta_inputs regreso_input"
                  type={goRetBtn.soloIda ? "text" : "date"}
                  value={goRetBtn.soloIda && "(Sólo Ida)"}
                />
              </label>
            </div>
            <div className="cabina_viajero">
              <label className="input_label_container" htmlFor="">
                Clase de cabina y viajero:
                <input className="ruta_inputs ultimo_input" type="text" />
              </label>
              <button className="buscar_btn">Buscar</button>
            </div>
          </div>
        </div>
      </main>

      <div className="sugerencias">Sugerencias</div>
      <article>
        <div className="mapaCovid_container">
          <div className="texto_div">
            <h3>Mapa de viajes COVID-19</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              architecto quos optio quisquam voluptatum et?
            </p>
            <button className="mapaCovid_btn">Explora el mapa</button>
          </div>
          <img className="mapa_img" src={mapaCovid} alt="mapa" />
        </div>
      </article>
    </div>
  );
}

export default App;
