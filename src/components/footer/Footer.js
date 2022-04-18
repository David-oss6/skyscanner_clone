import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="columna">
        <h5> Explorar </h5>
        <a href="">Ciudades</a>
        <a href="">Aeropuertos</a>
        <a href="">Países</a>
        <a href="">Aerolíneas</a>
        <a href="">Vuelos baratos</a>
        <a href="">Hoteles baratos</a>
        <a href="">Alquiler de coches</a>
        <a href="">App de Skyscanner</a>
        <a href="">Mapa del sitio</a>
      </div>
      <div className="columna">
        <h5>Partners</h5>
        <a href="">Colabora con nosotros</a>
        <a href=""> Anúnciate con nosotros</a>
        <a href="">Travel Insight</a>
        <a href="">Afiliados</a>
        <a href="">API</a>{" "}
      </div>
      <div className="columna">
        <h5>Compañía</h5>
        <a href="">Sobre nosotros</a>
        <a href=""> ¿Por qué Skyscanner? </a>
        <a href="">Prensa</a>
        <a href="">Nuestros empleados</a>
        <a href="">Accesibilidad</a>
        <a href="">Sostenibilidad</a>
        <a href="">Historia de la marca</a>
        <a href="">Información de la empresa</a>
        <a href="">Empleo Noticias y actualidad de viajes</a>
        <a href="">Política de cookies</a>
        <a href="">Política de privacidad</a>
        <a href=""> Términos de servicio</a>
      </div>
      <div className="columna">
        <h5>Ayuda</h5>
        <a href="">Ayuda</a>
        <a href="">Configuración de privacidad</a>
      </div>
    </footer>
  );
}
