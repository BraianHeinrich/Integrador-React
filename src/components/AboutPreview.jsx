import React from "react";
import "../styles/components.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="about-preview">
      <div className="about-preview-container">
        <div className="about-preview-info">
          <h2 className="about-preview-title">Sobre Nosotros</h2>
          <p className="about-preview-text">
            En <span className="highlight">SCU Nutrition</span> trabajamos para 
            acompañarte en tu transformacion fisica. Suplementos premium,
            asesoramiento profesional y dedicacion total al rendimiento.
          </p>

          <Link to="/about">
            <button className="about-preview-btn">Conocer mas</button>
          </Link>
        </div>

        <div className="about-preview-image">
          <img 
           src="/assets/images/team-about.webp"
           alt="SCU Team"
           className="about-preview-img"
          /> 
        </div>

      </div>
    </section>
  );
}
