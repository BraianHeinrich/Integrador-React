import React from "react";
import "../styles/about.css";

export default function AboutPage() {
  return (
    <section className="aboutpage-container">
     <div className="aboutpage-wrapper">
      <div className="aboutpage-img-box">
        <img
         src="/assets/images/creatina.png"
         alt="SCU Team"
         className="aboutpage-img"
        />
      </div>
      <div className="aboutpage-info">
        <h1 className="aboutpage-title">Nuestra Historia</h1>

        <p className="aboutpage-text">
          En <span className="highlight">SCU Nutrition</span> nacimos con la mision
          de potenciar tu rendimiento fisico y ayudarte a alcanzar tus objetivos
          deportivos con productos premium y acompañamiento constante.
        </p>

        <p className="aboutpage-text">
          Nos especializamos en suplementos deportivos, nutricion y bienestar
          integral. Creemos en el esfuerzo, la disciplina y la constancia como
          pilares fundamentales de cualquier trasnformacion.
        </p>
        <p className="aboutpage-text">
          Somos mas que uba tienda: somos una comunidad que se supera dia a dia.
        </p>
      </div>
     </div>
    </section>
  );
}
