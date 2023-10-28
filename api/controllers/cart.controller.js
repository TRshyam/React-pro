// import User from '../path-to-user-model'; // Import your User model
// import Product from '../path-to-product-model'; // Import your Product model

import products from "../modules/products.module.js";
import User from "../modules/user.module.js";




export const addToCart = async (req, res) => {
  const userId = req.params.userId; 
  const productId = req.params.productId; 
  const quantity = 1;

  try {
    const user = await User.findById(userId);

    if (user) {
      const product = await products.findById(productId);

      if (product) {
        user.cart.push({ product: product._id, quantity });
        await user.save();

        res.status(200).json({ message: 'Product added to the cart' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const removeFromCart = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId; 
  // const userId = "653c3d6a87243f2a56957eb4";
  // const productId ="653b14ad61aa5d01d2bfb666"; 
  
  try {
    const user = await User.findById(userId);

    if (user) {
      const cartItemIndex = user.cart.findIndex((item) => item.product.toString() === productId);

      if (cartItemIndex !== -1) {
        user.cart.splice(cartItemIndex, 1); // Remove the item from the cart
        await user.save();

        res.status(200).json({ message: 'Product removed from the cart' });
      } else {
        res.status(404).json({ message: 'Product not found in the cartaa' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};