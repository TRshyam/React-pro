import React, { useState } from 'react';

function AddToCart({ userId, productId }) {
  const [message, setMessage] = useState('');

  const handleAddToCart = async () => {
    try {
      const response = await fetch(`/api/users/${userId}/addToCart/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setMessage('Product added to the cart');
      } else if (response.status === 404) {
        setMessage('Product or user not found');
      }
    } catch (error) {
      setMessage('Internal Server Error');
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-12 rounded-lg"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AddToCart;
