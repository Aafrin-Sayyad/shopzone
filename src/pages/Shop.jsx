import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=60&skip=0')
        const data = await res.json()
        setProducts(data.products)
        const cats = ['all', ...new Set(data.products.map(p => p.category))]
        setCategories(cats)
      } catch {
        setError('Failed to load products. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filtered = products.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'all' || p.category === category
    return matchSearch && matchCat
  })

  if (loading) return (
    <div className="loading-screen">
      <span className="loading-ornament">✦</span>
      <p className="loading-text">Curating the collection…</p>
    </div>
  )

  if (error) return (
    <div className="error-box page-wrapper">
      <p>{error}</p>
    </div>
  )

  return (
    <div className="shop fade-in">
      <div className="shop-header page-wrapper">
        <p className="shop-sub">The Collection</p>
        <h1 className="shop-title">Our Emporium</h1>
        <div className="divider"><span>✦</span></div>
      </div>

      {/* Filters */}
      <div className="shop-filters page-wrapper">
        <input
          type="text"
          placeholder="Search products…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="cat-pills">
          {categories.map(c => (
            <button
              key={c}
              className={`cat-pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>
      </div>

      <div className="shop-count page-wrapper">
        <p>{filtered.length} items</p>
      </div>

      {/* Product Grid */}
      <div className="products-grid page-wrapper">
        {filtered.map((product, i) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
            style={{ animationDelay: `${(i % 12) * 0.04}s` }}
          >
            <div className="product-image-wrap">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
                loading="lazy"
              />
              {product.discountPercentage > 10 && (
                <span className="product-badge">-{Math.round(product.discountPercentage)}%</span>
              )}
            </div>
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.title}</h3>
              <div className="product-footer">
                <span className="product-price">₹{(product.price * 84).toFixed(0)}</span>
                <span className="product-rating">★ {product.rating.toFixed(1)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
