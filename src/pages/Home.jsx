import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home fade-in">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content page-wrapper">
          <p className="hero-sub">Est. MMXXV · Fine Goods Emporium</p>
          <h1 className="hero-title">
            Discover<br />
            <em>Curated</em><br />
            Luxury
          </h1>
          <div className="divider">
            <span>✦</span>
          </div>
          <p className="hero-desc">
            A carefully assembled collection of the world's finest products,
            delivered to your doorstep with grace and precision.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-gold">Enter the Shop</Link>
            <Link to="/contact" className="btn">Write to Us</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features page-wrapper">
        <div className="divider"><span>Our Promise</span></div>
        <div className="features-grid">
          {[
            { icon: '✦', title: 'Curated Selection', desc: 'Every item chosen for quality, beauty, and lasting value.' },
            { icon: '◈', title: 'Swift Delivery', desc: 'From our vaults to your door in days, not weeks.' },
            { icon: '❖', title: 'White-Glove Service', desc: 'Our team is at your disposal, seven days a week.' },
            { icon: '◇', title: 'Guaranteed Authentic', desc: 'Every product verified and certified for your peace of mind.' },
          ].map(f => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta-inner page-wrapper">
          <h2>Begin Your Journey</h2>
          <p>Thousands of premium products await your discovery.</p>
          <Link to="/shop" className="btn btn-gold">Browse All Products</Link>
        </div>
      </section>
    </div>
  )
}
