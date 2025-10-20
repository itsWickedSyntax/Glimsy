import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    const { addToCart } = useCart();

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Weight: {product.weight}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;