import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { API_URL } from "../config/api";
import "../styles/products.css";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="products-page">
      <h1 className="products-title">Nuestros Productos</h1>

      <div className="products-grid">
        {products.map(product => (
          <div key={product._id} className="products-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">
              ${product.price.toLocaleString()}
            </p>

            <button
              className="btn-add"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}


