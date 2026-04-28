import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/AppContext'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const { dispatch, showToast } = useCart()

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(r => r.json())
      .then(data => { setProduct(data); setActiveImg(0) })
      .catch(() => setError('Product not found.'))
      .finally(() => setLoading(false))
  }, [id])

  function handleAddToCart() {
    dispatch({ type: 'ADD', item: product })
    showToast(`${product.title} added to cart`)
  }

  if (loading) return (
    <div className="loading-screen">
      <span className="loading-ornament">✦</span>
      <p className="loading-text">Fetching product details…</p>
    </div>
  )

  if (error || !product) return (
    <div className="error-box page-wrapper"><p>{error}</p></div>
  )

  const images = product.images || [product.thumbnail]

  return (
    <div className="product-detail fade-in page-wrapper">
      <div className="breadcrumb">
        <Link to="/shop">← Back to Shop</Link>
        <span> / </span>
        <span>{product.category}</span>
      </div>

      <div className="detail-layout">
        {/* Images */}
        <div className="detail-images">
          <div className="main-image-wrap">
            <img
              src={images[activeImg]}
              alt={product.title}
              className="main-image"
              key={activeImg}
            />
          </div>
          {images.length > 1 && (
            <div className="thumb-row">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`thumb ${i === activeImg ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1 className="detail-title">{product.title}</h1>

          <div className="detail-meta">
            <span className="detail-rating">★ {product.rating.toFixed(1)}</span>
            <span className="detail-stock">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <div className="detail-price-row">
            <span className="detail-price">₹{(product.price * 84).toFixed(0)}</span>
            {product.discountPercentage > 0 && (
              <span className="detail-discount">
                {Math.round(product.discountPercentage)}% off
              </span>
            )}
          </div>

          <div className="divider"><span>✦</span></div>

          <p className="detail-desc">{product.description}</p>

          {product.tags && (
            <div className="detail-tags">
              {product.tags.map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          )}

          <div className="detail-actions">
            <button
              className="btn btn-gold"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <Link to="/cart" className="btn">View Cart</Link>
          </div>

          <div className="detail-extra">
            <div className="extra-item">
              <span className="extra-label">Brand</span>
              <span>{product.brand || '—'}</span>
            </div>
            <div className="extra-item">
              <span className="extra-label">SKU</span>
              <span>{product.sku || `SZ-${product.id}`}</span>
            </div>
            <div className="extra-item">
              <span className="extra-label">Warranty</span>
              <span>{product.warrantyInformation || '1 Year'}</span>
            </div>
            <div className="extra-item">
              <span className="extra-label">Shipping</span>
              <span>{product.shippingInformation || 'Standard'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
