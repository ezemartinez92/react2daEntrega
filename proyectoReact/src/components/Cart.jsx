const Cart = ({ cart, increaseQty, decreaseQty, totalPrice }) => {
  if (cart.length === 0) {
    return <p className="empty-cart">El carrito está vacío</p>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.nombre} />

          <div className="cart-info">
            <h4>{item.nombre}</h4>
            <p>${item.precio}</p>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.cantidad}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <p className="subtotal">
              Subtotal: ${item.precio * item.cantidad}
            </p>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;