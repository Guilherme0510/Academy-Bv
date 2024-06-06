import React from "react";
import './map.css';

function Map() {
  return (
    <section class="location-section" id="localizacao">
      <div className="text-center py-5">
        <h1>Nossa Localização</h1>
      </div>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117090.7761391134!2d-46.7071888!3d-23.4933845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef73e1a83000f%3A0x4a3f39a008b1eac4!2sStudio%20Beatriz%20Vieira!5e0!3m2!1spt-BR!2sus!4v1717512872943!5m2!1spt-BR!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="location-info">
          <h2>Nosso Endereço</h2>
          <p><span class="location-icon">📍</span>Av. Água Fria, 1588 - Tucuruvi, São Paulo - SP, 02332-001, Brasil</p>
          <h2>Horário de funcionamento</h2>
          <p>Segunda a Sexta, das 09h00 às 18h00</p>
        </div>
      </div>
    </section>
  );
}

export default Map;