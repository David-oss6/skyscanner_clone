import React, { useEffect, useLayoutEffect, useState } from "react";
import "./article.css";
import room from "../../img/room.jpg";
import mapaCovid from "../../img/mapaCovid.png";
import { hoteles } from "../../aplication/hoteles";

export default function Article() {
  const [size, setSize] = useState();
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return;
  }, []);
  useEffect(() => {
    setSize(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <article>
      <div className="mapaCovid_container">
        <div className="texto_div">
          <h3>Mapa de viajes COVID-19</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. architecto
            quos optio quisquam voluptatum et?
          </p>
          <a
            href="https://www.skyscanner.es/travel-restrictions?vaccinationStatus=fully-vaccinated"
            target="_blank"
            className="mapaCovid_btn"
          >
            Explora el mapa
          </a>
        </div>
        <img className="mapa_img" src={mapaCovid} alt="mapa" />
      </div>
      {/* EMPIEZA HOTELES *************************************************/}
      <div className="planifica_escapada_div">
        <h2>Planifica tu próxima escapada</h2>
        <div className="botones">
          <div className="destinos">
            <button className="selected  ">Madrid</button>
            <button className="destino_btn ">Palma de Mallorca</button>
            <button className="destino_btn hide">Ibiza</button>
            <button className="destino_btn hide">Santa Cruz de Tenerife</button>
            <button className="destino_btn hide">Barcelona</button>
          </div>
          <div className="flechas">
            <a className="vermashoteles" href="#" target="_blank">
              Ver mas hoteles
            </a>
            <button className="flechas_btn"> {"<"} </button>
            <button className="flechas_btn"> {">"} </button>
          </div>
        </div>
        <div className="hoteles_cards">
          {hoteles &&
            hoteles.map((hotel, index) => {
              if (index < 4) {
                return (
                  <div key={index} className="card_container">
                    <img className="card_img" src={room} alt="room" />
                    <div className="hotel_info">
                      <p>📍{hotel.location}</p>
                      <h4 className="card_title">{hotel.name}</h4>
                      <div className="starPrice_row">
                        <p>⭐{hotel.stars}</p>
                        <p>{hotel.price}/night</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </article>
  );
}
