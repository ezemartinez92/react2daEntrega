import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      {/* Link al home */}
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'white' }}>
        SHOES SHOP
      </Link>
      
      <ul className="nav-links">
        <li>
            <NavLink to="/category/deportivas" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deportivas</NavLink>
        </li>
        <li>
            <NavLink to="/category/casual" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Casual</NavLink>
        </li>
        <li>
            <NavLink to="/category/botas" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Botas</NavLink>
        </li>
      </ul>

      <Link to="/cart" className="cart" style={{ textDecoration: 'none', color: 'white' }}>
        🛒 <span>{cartCount}</span>
      </Link>
    </nav>
  );
};

export default NavBar;