import React from "react";
import "../styles/components.css";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);
  const { addToCart } = useCart();

  return (
    <section className="featured-products">
      <h2 className="featured-title">Productos Destacados</h2>

      <div className="featured-grid">
        {featured.map((item) => (
          <div key={item.id} className="featured-card">
            <img src={item.image} className="featured-img" />
            <p className="featured-name">{item.name}</p>
            <p className="featured-price">${item.price}</p>

            <button
              className="featured-btn"
              onClick={() => addToCart(item)}   // <-- AHORA AGREGA AL CARRITO
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}