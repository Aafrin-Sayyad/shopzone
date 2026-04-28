import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            {/* 404 */}
            <Route path="*" element={
              <div className="error-box page-wrapper" style={{ marginTop: '5rem' }}>
                <p>404 · Page not found</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </AppProvider>
    </BrowserRouter>
  )
}
