import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart, useAuth } from '../context/AppContext'
import './Checkout.css'

export default function Checkout() {
  const { cart, cartTotal, dispatch } = useCart()
  const { user } = useAuth()
  const [placed, setPlaced] = useState(false)

  function handleOrder(e) {
    e.preventDefault()
    setPlaced(true)
    dispatch({ type: 'CLEAR' })
  }

  if (placed) return (
    <div className="checkout-success page-wrapper fade-in">
      <div className="success-box">
        <div className="success-icon">✦</div>
        <h1>Order Placed!</h1>
        <p>Thank you for your order, <strong>{user}</strong>.</p>
        <p className="success-sub">
          A confirmation has been dispatched to your records.
          Your items will arrive with care and precision.
        </p>
        <div className="divider"><span>✦</span></div>
        <Link to="/shop" className="btn btn-gold">Continue Shopping</Link>
      </div>
    </div>
  )

  return (
    <div className="checkout-page page-wrapper fade-in">
      <div className="checkout-header">
        <p className="shop-sub">Final Step</p>
        <h1 className="shop-title">Checkout</h1>
        <div className="divider"><span>✦</span></div>
      </div>

      <div className="checkout-layout">
        {/* Form */}
        <div className="checkout-form-section">
          <h3 className="section-title">Delivery Information</h3>
          <form className="checkout-form" onSubmit={handleOrder}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" defaultValue={user !== 'Guest' ? user : ''} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <input type="text" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" required />
              </div>
            </div>

            <h3 className="section-title" style={{ marginTop: '2rem' }}>Payment Details</h3>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="•••• •••• •••• ••••" maxLength={19} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry</label>
                <input type="text" placeholder="MM / YY" required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="•••" maxLength={4} required />
              </div>
            </div>

            <button type="submit" className="btn btn-gold place-order-btn">
              Place Order · ₹{cartTotal.toFixed(0)}
            </button>
          </form>
        </div>

        {/* Order review */}
        <div className="checkout-order">
          <h3 className="section-title">Order Review</h3>
          <div className="order-items">
            {cart.map(item => (
              <div className="order-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} className="order-img" />
                <div className="order-item-info">
                  <p className="order-item-name">{item.title}</p>
                  <p className="order-item-qty">Qty: {item.qty}</p>
                </div>
                <span className="order-item-price">₹{(item.price * 84 * item.qty).toFixed(0)}</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(0)}</span>
          </div>
          <p className="order-note">
            ✦ Free shipping on all orders. Estimated delivery: 3–5 business days.
          </p>
        </div>
      </div>
    </div>
  )
}
