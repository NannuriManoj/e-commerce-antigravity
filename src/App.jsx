import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', marginTop: 'auto', backgroundColor: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.875rem' }}>
          <p>&copy; 2024 Minimal E-commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
