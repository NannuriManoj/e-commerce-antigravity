import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '50%', marginBottom: '2rem' }}>
                    <ShoppingBag size={48} className="text-secondary" />
                </div>
                <h2 style={{ marginBottom: '1rem' }}>Your cart is empty</h2>
                <p className="text-secondary" style={{ marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
                <Link to="/products" className="btn btn-primary">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ marginBottom: '3rem' }}>Shopping Cart</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', alignItems: 'start' }}>
                {/* Cart Items */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    <div style={{ marginTop: '2rem' }}>
                        <Link to="/products" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ArrowLeft size={18} /> Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Order Summary */}
                <div style={{ backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius)', position: 'sticky', top: '6rem' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className="text-secondary">Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className="text-secondary">Shipping</span>
                            <span>Free</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0.5rem 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '600' }}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => {
                            alert('Thank you for your purchase!');
                            clearCart();
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>

            {/* Responsive Fix for Cart Layout */}
            <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: '1fr 350px'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Cart;
