import React from 'react';
import Header from '../components/Header';


export default function Product() {
  return (
   <div>
    <Header /> 

    
    <div className="flex mx-5 my-10 ">
  {/* Product Image (Left Side) */}
  <div className="w-1/2 p-4">
    <img
    //   src={product.imgurl}
    src="https://images.apollo247.in/pub/media/catalog/product/G/N/GNC0024_1-JULY23_1.jpg"
      alt="Product Image"
      className="w-full h-auto"
    />
  </div>

  {/* Product Description and Price (Right Side) */}
  <div className="w-1/2 p-4">
    <h1 className="text-2xl font-bold mb-4">ENSURE</h1>
    {/* <h1 className="text-2xl font-bold mb-4">{product.productName}</h1> */}
    <p className="text-gray-600 mb-4">DESSSSSSSSSSSSS</p>
    {/* <p className="text-gray-600 mb-4">{product.productDescription}</p> */}
    {/* <p className="text-lg font-bold text-green-500 mb-4">Price: ₹{product.price}</p> */}
    <p className="text-lg font-bold text-green-500 mb-4">Price: ₹5858</p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
      Add to Cart
    </button>
  </div>
</div>

    
    </div>
  )
}
