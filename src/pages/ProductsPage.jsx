import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import "../styles/products.css";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <main className="products-page">
      <h1 className="products-title">Nuestros Productos</h1>

      <div className="products-gird">
        {products.map((product) => (
          <div key={product.id} className="products-card">
            <img 
             src={product.image}
             alt={product.name}
             className="product-img"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toLocaleString()}</p>
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

