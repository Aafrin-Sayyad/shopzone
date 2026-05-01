# 🛒 ShopZone – E-Commerce Single Page Application
---
## 📸 Demo

👉 Vercel deploy Link: [(https://shopzone-rouge.vercel.app/)]


---
## 📌 Overview

ShopZone is a React-based Single Page Application (SPA) that simulates a modern e-commerce website. Users can browse products, view detailed information, and manage their shopping cart seamlessly without page reloads.

This project focuses on real-world frontend development concepts like routing, global state management, and authentication.

---

## 🚀 Features

### 🔹 Level 1 – Basic Functionality

* Home page with welcome banner
* Shop page displaying products from API
* Product detail page with dynamic routing
* Contact page with a simple form

### 🔹 Level 2 – Cart System

* Add products to cart
* Global cart management using Context API
* Cart page with total price calculation
* Navbar with live cart item count

### 🔹 Level 3 – Advanced Features

* Persistent cart using localStorage
* Simple login system (Guest login)
* Protected checkout route
* Redirect to login if not authenticated

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router DOM (v6)
* **State Management:** Context API
* **Styling:** CSS / (Optional: Tailwind / Material UI)
* **API:** https://dummyjson.com/products

---

## 📂 Project Structure

```
shopzone/
│── public/
│── src/
│   │── components/
│   │── pages/
│   │── context/
│   │── App.jsx
│   │── main.jsx
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/shopzone.git
```

### 2️⃣ Navigate to project folder

```bash
cd shopzone
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🌐 Routing Structure

* `/` → Home Page
* `/shop` → Product Listing
* `/product/:id` → Product Details
* `/cart` → Cart Page
* `/login` → Login Page
* `/checkout` → Protected Page
* `/contact` → Contact Page

---

## 🔐 Authentication Logic

* User clicks **"Login as Guest"**
* User state is set to authenticated
* Protected routes check user state
* Unauthorized users are redirected to `/login`

---

## 🧠 Key Concepts Learned

* Single Page Application (SPA) behavior
* React Router for navigation
* Dynamic routing using URL parameters
* Context API for global state
* Local storage for persistence
* Protected routes implementation

---

## ⚠️ Challenges Faced

* Managing global state without prop drilling
* Handling duplicate items in cart
* Fixing routing issues on refresh
* Maintaining cart after reload
* Understanding React lifecycle (useEffect)

---


## 📌 Important Notes

* Use `<Link>` instead of `<a>` to avoid page reloads
* Ensure unique keys while mapping products
* Add `vercel.json` for proper deployment routing

---

## 👩‍💻 Author

**Aafrin Sayyad**
Frontend Developer | React Enthusiast

---

## ⭐ Conclusion

This project gave hands-on experience in building a real-world React application. It strengthened my understanding of routing, state management, and user flow in modern web applications.

---
