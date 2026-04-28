import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner page-wrapper">
        <div className="footer-brand">
          <span className="footer-logo">✦ ShopZone ✦</span>
          <p>A curated emporium of fine goods, delivered with grace.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
      <div className="footer-bottom page-wrapper">
        <p>© {new Date().getFullYear()} ShopZone. Built with React · Powered by DummyJSON.</p>
      </div>
    </footer>
  )
}
