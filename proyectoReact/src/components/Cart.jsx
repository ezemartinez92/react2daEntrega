import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onIncrease, onDecrease }) => (
  <div className="cart-item-card">
    <div className="cart-img-wrapper">
      <img src={item.img} alt={item.nombre} loading="lazy" />
    </div>

    <div className="cart-item-info">
      <h4>{item.nombre}</h4>
      <p className="unit-price">Precio unitario: ${item.precio.toLocaleString()}</p>
      
      <div className="cart-controls">
        <button 
          onClick={() => onDecrease(item.id)} 
          aria-label="Disminuir cantidad"
          disabled={item.cantidad <= 1} 
        >-</button>
        <span>{item.cantidad}</span>
        <button onClick={() => onIncrease(item.id)} aria-label="Aumentar cantidad">+</button>
      </div>
    </div>

    <div className="cart-item-subtotal">
      <p>Subtotal</p>
      <strong>${(item.precio * item.cantidad).toLocaleString()}</strong>
    </div>
  </div>
);

const Cart = ({ cart = [], increaseQty, decreaseQty, totalPrice }) => {
  const totalItems = useMemo(() => 
    cart.reduce((acc, item) => acc + item.cantidad, 0), 
    [cart]
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabes qué elegir? ¡Mira nuestras nuevas colecciones!</p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <section className="cart-items-list" aria-label="Productos en el carrito">
        {cart.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onIncrease={increaseQty} 
            onDecrease={decreaseQty} 
          />
        ))}
      </section>

      <aside className="cart-summary">
        <h3>Resumen de Compra</h3>
        <div className="summary-details">
          <div className="summary-row">
            <span>Productos ({totalItems})</span>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>${totalPrice.toLocaleString()}</strong>
          </div>
        </div>
        
        <Link to="/checkout" className="btn-checkout">
          Finalizar Compra
        </Link>
      </aside>
    </div>
  );
};

export default Cart;