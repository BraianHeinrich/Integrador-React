import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="font-semibold">SCU Store</span> — Todos los derechos reservados.
        </p>

        
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-icon" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

       
        <div className="footer-links">
          <a href="#" className="footer-link">Términos</a>
          <a href="#" className="footer-link">Privacidad</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

