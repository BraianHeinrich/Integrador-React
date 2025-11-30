import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <ShoppingCart size={22} />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
}
