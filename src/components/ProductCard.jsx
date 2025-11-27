import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </div>
            <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                        <p className="text-secondary text-sm" style={{ marginBottom: '0.25rem' }}>{product.category}</p>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{product.title}</h3>
                    </div>
                    <span style={{ fontWeight: '600' }}>${product.price}</span>
                </div>
                <button
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem', gap: '0.5rem' }}
                    onClick={() => addToCart(product)}
                >
                    <Plus size={18} /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
