import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

const CartContext = createContext(null)
const AuthContext = createContext(null)

// Load cart from localStorage (Level 3: persistence)
function loadCart() {
  try {
    const saved = localStorage.getItem('shopzone_cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.find(i => i.id === action.item.id)
      if (exists) {
        return state.map(i =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'INCREMENT':
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i)
    case 'DECREMENT':
      return state.map(i =>
        i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)
  const [user, setUser] = useState(() => {
    return localStorage.getItem('shopzone_user') || null
  })
  const [toast, setToast] = useState(null)

  // Level 3: Sync cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem('shopzone_cart', JSON.stringify(cart))
  }, [cart])

  // Sync user auth to localStorage
  useEffect(() => {
    if (user) localStorage.setItem('shopzone_user', user)
    else localStorage.removeItem('shopzone_user')
  }, [user])

  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + (i.price * 84) * i.qty, 0)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, dispatch, cartCount, cartTotal, showToast }}>
        {children}
        {toast && <div className="toast">✦ {toast}</div>}
      </CartContext.Provider>
    </AuthContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export function useAuth() {
  return useContext(AuthContext)
}
