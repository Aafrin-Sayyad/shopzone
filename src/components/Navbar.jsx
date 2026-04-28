import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart, useAuth } from '../context/AppContext'
import './Navbar.css'

export default function Navbar() {
  const { cartCount } = useCart()
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner page-wrapper">
        <Link to="/" className="navbar-brand">
          <span className="brand-ornament">✦</span>
          <span className="brand-text">ShopZone</span>
          <span className="brand-ornament">✦</span>
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          {user && (
            <li><NavLink to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</NavLink></li>
          )}
          {!user ? (
            <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
          ) : (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout ({user})
              </button>
            </li>
          )}
          <li>
            <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
              <span className="cart-icon">🛒</span>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
