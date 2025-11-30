import { Link } from "react-router-dom";
import "../styles/components.css";
import { useState } from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">SCU<span className="text-primary">Store</span></Link>

        <nav className={`nav-links ${open ? "hidden" : ""}`}>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/products" className="nav-link">Productos</Link>
          <Link to="/about" className="nav-link">Sobre</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </nav>

        <div className={`nav-right ${open ? "hidden" : ""}`}>
          <CartWidget />
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="menu">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <div className="p-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Productos</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Sobre</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}
