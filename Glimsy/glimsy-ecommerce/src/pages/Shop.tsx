import React from 'react';
import ProductList from '../components/ProductList';

const Shop: React.FC = () => {
    return (
        <div className="shop-container">
            <h1 className="shop-title">Our Scented Candles</h1>
            <ProductList />
        </div>
    );
};

export default Shop;