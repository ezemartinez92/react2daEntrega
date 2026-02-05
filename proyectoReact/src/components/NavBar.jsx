import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
    
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'white' }}>
       Zapatos Premium
      </Link>
      
      <ul className="nav-links">
      
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
        </li>

        {/* MENÚ DESPLEGABLE */}
        <li className="dropdown">
            <span className="Option dropdown-trigger">Colecciones ▼</span>
            
            <div className="dropdown-content">
                <NavLink to="/category/casual" className="dropdown-item">Casual</NavLink>
                <NavLink to="/category/formal" className="dropdown-item">Formal</NavLink>
                <NavLink to="/category/botas" className="dropdown-item">Botas</NavLink>
            </div>
        </li>
      </ul>

      <Link to="/cart" className="cart" style={{ textDecoration: 'none', color: 'white' }}>
        🛒 <span>{cartCount}</span>
      </Link>
    </nav>
  );
};

export default NavBar;