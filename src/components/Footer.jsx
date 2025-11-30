import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="font-semibold">SCU Store</span> — Todos los derechos reservados.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Términos</a>
          <a href="#" className="footer-link">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
