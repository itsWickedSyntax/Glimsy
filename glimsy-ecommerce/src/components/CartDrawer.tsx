import React from 'react';
import { useCart } from '../hooks/useCart';

const CartDrawer: React.FC = () => {
    const { cartItems, totalAmount, clearCart } = useCart();

    return (
        <div className="cart-drawer">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.quantity} x {item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <h3>Total: {totalAmount}</h3>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={() => alert('Proceeding to checkout...')}>Checkout</button>
        </div>
    );
};

export default CartDrawer;