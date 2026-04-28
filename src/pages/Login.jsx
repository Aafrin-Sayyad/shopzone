import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AppContext'
import './Login.css'

export default function Login() {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  if (user) return <Navigate to="/" replace />

  function handleGuestLogin() {
    setUser('Guest')
    navigate('/')
  }

  function handleNameLogin(e) {
    e.preventDefault()
    if (name.trim()) {
      setUser(name.trim())
      navigate('/')
    }
  }

  return (
    <div className="login-page fade-in">
      <div className="login-box">
        <div className="login-ornament">✦</div>
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-sub">Sign in to continue your journey</p>

        <div className="divider"><span>✦</span></div>

        <form className="login-form" onSubmit={handleNameLogin}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name…"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-gold login-btn">
            Sign In
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button className="btn guest-btn" onClick={handleGuestLogin}>
          🚶 Continue as Guest
        </button>

        <p className="login-note">
          No payment or personal information required.
          <br />This is a demonstration login.
        </p>
      </div>
    </div>
  )
}
