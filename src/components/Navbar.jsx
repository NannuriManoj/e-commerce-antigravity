import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav style={{ borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', zIndex: 50 }}>
            <div className="container" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.025em' }}>
                    MINIMAL.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: '500' }}>Home</Link>
                    <Link to="/products" style={{ fontWeight: '500' }}>Products</Link>
                    <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <ShoppingBag size={24} />
                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="hidden-desktop" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none' }}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Styles would go here or in CSS - keeping it simple for now, assuming desktop first but responsive-ish */}
            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hidden-desktop { display: block !important; }
        }
        @media (min-width: 769px) {
           .hidden-desktop { display: none !important; }
        }
      `}</style>

            {/* Simple Mobile Dropdown */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderBottom: '1px solid var(--border)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                    <Link to="/cart" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        Cart <span>{cartCount} items</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
