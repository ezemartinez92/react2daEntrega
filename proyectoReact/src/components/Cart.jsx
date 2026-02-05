import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, increaseQty, decreaseQty, totalPrice }) => {
  
  // 1. Si el carrito está vacío, mostramos un mensaje amigable y un botón para volver
  if (cart.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabes qué elegir? ¡Mira nuestras nuevas colecciones!</p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px', width: 'auto' }}>
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      
      {/* SECCIÓN IZQUIERDA: LISTA DE PRODUCTOS */}
      <div className="cart-items-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item-card">
            
            {/* Imagen del producto */}
            <div className="cart-img-wrapper">
                <img src={item.img} alt={item.nombre} />
            </div>

            {/* Info y Controles */}
            <div className="cart-item-info">
              <h4>{item.nombre}</h4>
              <p className="unit-price">Precio unitario: ${item.precio.toLocaleString()}</p>
              
              <div className="cart-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            {/* Subtotal individual */}
            <div className="cart-item-subtotal">
              <p>Subtotal</p>
              <strong>${(item.precio * item.cantidad).toLocaleString()}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN DERECHA: RESUMEN DE COMPRA */}
      <div className="cart-summary">
        <h3>Resumen de Compra</h3>
        <div className="summary-row">
            <span>Productos ({cart.reduce((acc, item) => acc + item.cantidad, 0)})</span>
            <span>${totalPrice.toLocaleString()}</span>
        </div>
        <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toLocaleString()}</span>
        </div>
        
        {/* Botón para ir al Checkout */}
        <Link to="/checkout" className="btn-checkout">
            Iniciar Compra
        </Link>
      </div>

    </div>
  );
};

export default Cart;