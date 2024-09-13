import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost/php-rest-api/cart.php?action=get');
            console.log('Cart Items Response:', response.data);
            setCartItems(response.data);
        } catch (error) {
            toast.error('Error fetching cart items.');
            console.error('Error fetching cart items:', error);
        }
    };

    const handleQuantityChange = async (itemId, quantity) => {
        try {
            await axios.post('http://localhost/php-rest-api/cart.php?action=update', { id: itemId, quantity });
            fetchCartItems();
            toast.success('Quantity updated successfully.');
        } catch (error) {
            toast.error('Error updating quantity.');
            console.error('Error updating quantity:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await axios.post('http://localhost/php-rest-api/cart.php?action=remove', { id: itemId });
            fetchCartItems();
            toast.success('Item removed from cart.');
        } catch (error) {
            toast.error('Error removing item.');
            console.error('Error removing item:', error);
        }
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        toast.info('Checkout functionality to be implemented.');
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} style={{ marginBottom: '20px' }}>
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${calculateTotalPrice()}</h3>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Cart;
