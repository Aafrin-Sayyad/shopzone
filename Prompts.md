# Prompts.md – ShopZone SPA Project

## 📌 Project Overview

This project is a Single Page Application (SPA) built using React. The main goal is to create an E-Commerce frontend where users can browse products, view details, and manage a shopping cart without reloading the page.

The project uses React Router for navigation and Context API for managing global state like the cart and user authentication.

---

## 💡 How I Approached This Project

At the beginning, I understood the structure of a SPA and how routing works in React. Instead of using traditional page reloads, I implemented navigation using React Router.

I divided the project into three levels:

* Basic routing and product display
* Cart management using global state
* Authentication and protected routes

---

## 🔹 Prompts / Help Taken

I tried to do most of the logic on my own, but I used some guidance for understanding concepts and debugging.

### 1. Routing Setup

Prompt used:
"How to create multiple routes using react-router-dom v6 with BrowserRouter?"

Learned:

* How to define routes
* Difference between Route and Link
* Navigation without page reload

---

### 2. Dynamic Routing

Prompt used:
"How to get id from URL in React using useParams?"

Learned:

* Extracting dynamic values from URL
* Fetching specific product details

---

### 3. Fetch API Data

Prompt used:
"How to fetch API data in React using useEffect?"

Learned:

* API calling using fetch
* Handling loading state
* Storing data in state

---

### 4. Context API (Cart Management)

Prompt used:
"How to create global state using Context API for shopping cart?"

Learned:

* Creating context
* Wrapping app with provider
* Accessing state anywhere without prop drilling

---

### 5. Add to Cart Logic

Prompt used:
"How to add item to cart and increase quantity if item already exists?"

Learned:

* Array state management
* Conditional logic for duplicate items

---

### 6. Local Storage Persistence

Prompt used:
"How to store cart data in localStorage in React?"

Learned:

* Saving data using localStorage
* Loading data when app starts
* Preventing cart loss on refresh

---

### 7. Protected Routes

Prompt used:
"How to create protected routes in React Router?"

Learned:

* Redirecting users if not logged in
* Using Navigate component
* Creating reusable ProtectedRoute component

---

## ⚠️ Challenges Faced

* Understanding how routing works without page reload
* Managing cart state globally
* Fixing duplicate items in cart
* Handling page refresh without losing data
* Debugging useEffect running multiple times

---

## ✅ What I Learned

* React Router for navigation
* Context API for global state
* Dynamic routing using URL parameters
* API integration in React
* Local storage usage
* Basic authentication flow

---

## 🚀 Conclusion

This project helped me understand how real-world applications work. I learned how to manage state across multiple pages and how to build a complete frontend flow like an e-commerce website.

---
