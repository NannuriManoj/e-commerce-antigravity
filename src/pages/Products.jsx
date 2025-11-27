import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>All Products</h1>
                <p className="text-secondary">Browse our complete collection of premium goods.</p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
