import React, { useState } from "react";
import "./main.css";

export default function Main() {
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
    <main className="main">
      <h2>Tu viaje empieza aqui</h2>
      <div className="buscador_container">
        <div className="idavuelta_div">
          <label className="myLabel" htmlFor="">
            <input
              className="goRet_box"
              type="checkbox"
              onClick={() => handlegoRetBtn(1)}
              checked={goRetBtn.idaVuelta ? true : false}
            />
            Ida y vuelta
          </label>
          <label className="myLabel" htmlFor="">
            <input
              className="goRet_box"
              type="checkbox"
              onClick={() => handlegoRetBtn(2)}
              checked={goRetBtn.soloIda ? true : false}
            />
            Solo ida
          </label>
          <label className="myLabel" htmlFor="">
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
          <div className="de__a_claseCabina_div de_a_uno">
            <label className="input_label_container" htmlFor="">
              De
              <input className="ruta_inputs primer_input" type="text" />
            </label>
            <div className="filtros_de">
              <label htmlFor="">
                <input type="checkbox" />
                Añade aeropuertos cercanos
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Solo vuelos directos
              </label>
            </div>
          </div>
          <div className="de__a_claseCabina_div de_a_dos">
            <label className="input_label_container" htmlFor="">
              A
              <input className="ruta_inputs " type="text" />
            </label>
            <div className="filtros_de">
              <label htmlFor="">
                <input type="checkbox" />
                Añade aeropuertos cercanos
              </label>
            </div>
          </div>
          <div className="salida_regreso_div salida_media">
            <label className="input_label_container" htmlFor="">
              Salida
              <input className=" regreso_input" type="date" />
            </label>
          </div>
          <div className="salida_regreso_div trgreso_media">
            <label className="input_label_container" htmlFor="">
              Regreso
              <input
                className=" regreso_input"
                type={goRetBtn.soloIda ? "text" : "date"}
                value={goRetBtn.soloIda && "(Sólo Ida)"}
              />
            </label>
          </div>
          <div className="de__a_claseCabina_div">
            <label className="input_label_container" htmlFor="">
              Clase de cabina y viajero
              <input className="ruta_inputs ultimo_input" type="text" />
            </label>
            <button className="buscar_btn">Buscar</button>
          </div>
        </div>
      </div>
      <div className="sugerencias">Sugerencias</div>
    </main>
  );
}
