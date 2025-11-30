import React from "react";
import "../styles/components.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido a SCU Store</h1>
        <p className="hero-subtitle">Suplementos de calidad para potenciar tu rendimiento 💪</p>
        <Link to="/products"><button className="hero-btn">Ver Productos</button></Link>
      </div>
    </section>
  );
}
