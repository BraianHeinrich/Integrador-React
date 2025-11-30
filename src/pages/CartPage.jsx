import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ConfirmModal from "../components/ConfirmModal";
import Toast from "../components/Toast";
import "../styles/cart.css";
import "../styles/modal.css";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null);

  const handleConfirm = () => {
    if (actionType === "clear") {
      clearCart();
    } else if (actionType === "buy") {
      alert("Compra confirmada ✅ ¡Gracias por tu pedido!");
      clearCart();
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleOpenModal = (type) => {
    setActionType(type);
    setModalOpen(true);
  };

  if (cart.length === 0) {
    return (
      <main className="cart-empty">
        <h2 className="text-2xl font-semibold text-gray-700">
          Tu carrito está vacío 🛒
        </h2>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1 className="cart-title">Tu Carrito</h1>

      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <h3 className="cart-name">{item.name}</h3>
              <p className="cart-price">${item.price.toLocaleString()}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn-remove"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p className="cart-total">Total: ${totalPrice.toLocaleString()}</p>
        <div className="cart-actions">
          <button
            onClick={() => handleOpenModal("clear")}
            className="btn-clear"
          >
            Vaciar carrito
          </button>
          <button
            onClick={() => handleOpenModal("buy")}
            className="btn-buy"
          >
            Confirmar compra
          </button>
        </div>
      </div>

      {modalOpen && (
        <ConfirmModal
          isOpen={modalOpen}
          message={
            actionType === "clear"
              ? "¿Seguro que querés vaciar el carrito?"
              : "¿Confirmar la compra?"
          }
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </main>
  );
}


