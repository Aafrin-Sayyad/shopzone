import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart, useAuth } from '../context/AppContext'
import './Cart.css'

export default function Cart() {
  const { cart, dispatch, cartTotal, showToast } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleCheckout() {
    if (!user) {
      showToast('Please login to proceed to checkout')
      navigate('/login')
    } else {
      navigate('/checkout')
    }
  }

  if (cart.length === 0) return (
    <div className="cart-empty page-wrapper fade-in">
      <div className="cart-empty-inner">
        <span className="empty-icon">🛒</span>
        <h2>Your cart is empty</h2>
        <p>Browse our collection and add something beautiful.</p>
        <Link to="/shop" className="btn btn-gold">Visit the Shop</Link>
      </div>
    </div>
  )

  return (
    <div className="cart-page page-wrapper fade-in">
      <div className="cart-header">
        <p className="shop-sub">Your Selection</p>
        <h1 className="shop-title">Shopping Cart</h1>
        <div className="divider"><span>✦</span></div>
      </div>

      <div className="cart-layout">
        {/* Items */}
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img-wrap">
                <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
              </div>
              <div className="cart-item-info">
                <p className="cart-item-cat">{item.category}</p>
                <h3 className="cart-item-name">
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="cart-item-price">₹{(item.price * 84).toFixed(0)} each</p>
              </div>
              <div className="cart-item-controls">
                <button
                  className="qty-btn"
                  onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
                >−</button>
                <span className="qty-display">{item.qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                >+</button>
              </div>
              <div className="cart-item-subtotal">
                ₹{(item.price * 84 * item.qty).toFixed(0)}
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                title="Remove"
              >✕</button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-rows">
            {cart.map(item => (
              <div className="summary-row" key={item.id}>
                <span>{item.title.slice(0, 28)}{item.title.length > 28 ? '…' : ''} ×{item.qty}</span>
                <span>₹{(item.price * 84 * item.qty).toFixed(0)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(0)}</span>
          </div>
          <button className="btn btn-gold summary-cta" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <button
            className="btn btn-danger summary-clear"
            onClick={() => dispatch({ type: 'CLEAR' })}
          >
            Clear Cart
          </button>
          <Link to="/shop" className="continue-link">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}
