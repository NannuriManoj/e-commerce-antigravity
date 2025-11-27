import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--surface)', padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem', letterSpacing: '-0.05em' }}>
                        Minimalist Essentials for Modern Living
                    </h1>
                    <p className="text-secondary" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        Curated collection of premium accessories, electronics, and home goods designed with simplicity in mind.
                    </p>
                    <Link to="/products" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                        Shop Collection <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container" style={{ padding: '6rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '0.5rem' }}>Featured Products</h2>
                        <p className="text-secondary">Hand-picked favorites just for you.</p>
                    </div>
                    <Link to="/products" className="btn btn-outline">View All</Link>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
