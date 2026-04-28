import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page fade-in">
      <div className="contact-header page-wrapper">
        <p className="shop-sub">Get in Touch</p>
        <h1 className="shop-title">Contact Us</h1>
        <div className="divider"><span>✦</span></div>
      </div>

      <div className="contact-layout page-wrapper">
        {/* Info */}
        <div className="contact-info">
          <h2>We'd love to hear from you</h2>
          <p>
            Whether you have a question about an order, need assistance with a product,
            or simply wish to pass along your thoughts — our team is at your service.
          </p>
          <div className="contact-details">
            {[
              { label: 'Address', value: '12 Commerce Lane, Emporium Square, Hyderabad 500001' },
              { label: 'Email', value: 'hello@shopzone.com' },
              { label: 'Phone', value: '+91 98765 43210' },
              { label: 'Hours', value: 'Mon – Fri · 9:00 AM – 6:00 PM IST' },
            ].map(d => (
              <div className="contact-detail" key={d.label}>
                <span className="detail-label">{d.label}</span>
                <span>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <span className="success-mark">✦</span>
              <h3>Message Received</h3>
              <p>We'll respond within one business day. Thank you for writing to us.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" required />
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
                <label>Subject</label>
                <select required>
                  <option value="">Select a subject…</option>
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Return & Refund</option>
                  <option>General Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} required style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-gold contact-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
