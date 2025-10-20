import React from 'react';
import { ProductList } from '../components/ProductList';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Glimsy</h1>
                <p>Discover the essence of tranquility with our scented candles.</p>
            </header>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <ProductList />
            </section>
        </div>
    );
};

export default Home;