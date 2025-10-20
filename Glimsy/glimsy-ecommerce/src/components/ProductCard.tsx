import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-weight">{product.weight}g</p>
      <p className="product-mood">{product.moodDescription}</p>
      <button className="add-to-cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;