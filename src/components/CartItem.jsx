import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: '6rem', height: '6rem', flexShrink: 0, backgroundColor: '#f3f4f6', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h4 style={{ fontWeight: '600' }}>{item.title}</h4>
                        <p className="text-secondary text-sm">{item.category}</p>
                    </div>
                    <p style={{ fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.25rem' }}>
                        <button
                            className="btn-icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            style={{ opacity: item.quantity <= 1 ? 0.5 : 1 }}
                        >
                            <Minus size={16} />
                        </button>
                        <span style={{ width: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>{item.quantity}</span>
                        <button
                            className="btn-icon"
                            onClick={() => updateQuantity(item.id, 1)}
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    <button
                        className="text-secondary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}
                        onClick={() => removeFromCart(item.id)}
                    >
                        <Trash2 size={16} /> Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
