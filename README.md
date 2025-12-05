# E-Commerce Antigravity

A simple and clean **React + Vite e-commerce application** this project allows users to view products, add items to the cart, and manage quantities with a smooth and minimal UI.

---

## Project Structure

```
E-COMMERCE-ANTIGRAVITY
│── node_modules/
│── public/
│   └── vite.svg
│
│── src/
│   ├── assets/
│   │    └── react.svg
│   │
│   ├── components/
│   │    ├── CartItem.jsx
│   │    ├── Navbar.jsx
│   │    └── ProductCard.jsx
│   │
│   ├── context/
│   │    └── CartContext.jsx
│   │
│   ├── data/
│   │    └── products.js
│   │
│   ├── pages/
│   │    ├── Cart.jsx
│   │    ├── Home.jsx
│   │    └── Products.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Features

- Product listing with images, titles, and prices  
- Add/remove items from cart  
- Update item quantities  
- Global cart state using **React Context API**  
- Simple and clean component-based UI  
- Fast development setup using **Vite**  

---

## Tech Stack

- **React (Vite)**
- **JavaScript (ES6+)**
- **CSS**
- **Context API** for state management
- **npm** for package management

---

## Getting Started

### 1 - Clone the repository
```sh
git clone https://github.com/your-username/e-commerce-antigravity.git
cd e-commerce-antigravity
```

### 2 - Install dependencies
```sh
npm install
```

### 3 - Start the development server
```sh
npm run dev
```

App runs at:

```
http://localhost:5173/
```

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Runs the app in development mode |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |

---

## Key Folders

### **components/**
Reusable UI parts such as Navbar, Product Card, and Cart Item.

### **context/**
Contains `CartContext.jsx` which manages the global cart state.

### **data/**
Includes `products.js`, a list of available products.

### **pages/**
Full pages such as Home, Products, and Cart.