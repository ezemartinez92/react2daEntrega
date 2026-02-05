import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart";
import './App.css';
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  // Agregar al carrito (Adaptado para recibir cantidad desde el ItemDetail)
  const addToCart = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === producto.id);

      if (existe) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        );
      }

      return [...prevCart, producto];
    });
  };

  // Incrementar cantidad (desde el carrito)
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  // Decrementar cantidad (elimina si llega a 0)
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // Totales
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <BrowserRouter>
      {/* NavBar visible en todas las rutas */}
      <NavBar cartCount={totalItems} />

      <div className="main-layout">
        <Routes>
          {/* 1. Catálogo Principal */}
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Todos nuestros productos" />} 
          />

          {/* 2. Catálogo Filtrado por Categoría */}
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer greeting="Categoría seleccionada" />} 
          />

          {/* 3. Detalle del Producto */}
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer addToCart={addToCart} />} 
          />

          {/* 4. Vista del Carrito */}
          <Route 
            path="/cart" 
            element={
              <div className="cart-page-container" style={{width: '100%'}}>
                <h2>Tu Carrito de Compras</h2>
                <Cart
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  totalPrice={totalPrice}
                />
              </div>
            } 
          />

          {/* 5. Ruta 404 - Not Found */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;