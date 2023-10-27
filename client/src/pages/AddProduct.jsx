import React from 'react';
import {useState} from 'react';


function AddProduct() {

    const [productData, setProductData] = useState({
        imgUrl:'',
        name: '',
        description: '',
        manufacturer: '',
        benefits: '',
        directions: '',
        safetyInfo: '',
        ingredients: '',
        regularPrice:'',
        discountPrice:'',
      });


    const Session = (e) => {
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      };
      console.log(productData)














  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Product Description:
          </label>
          <textarea
            id="productDescription"
            name="description"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productManufacturer" className="block text-gray-700 text-sm font-bold mb-2">
            Manufacturer/Marketer:
          </label>
          <input
            type="text"
            id="productManufacturer"
            name="manufacturer"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productBenefits" className="block text-gray-700 text-sm font-bold mb-2">
            Key Benefits:
          </label>
          <textarea
            id="productBenefits"
            name="benefits"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productDirections" className="block text-gray-700 text-sm font-bold mb-2">
            Directions for Use:
          </label>
          <textarea
            id="productDirections"
            name="directions"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productSafetyInfo" className="block text-gray-700 text-sm font-bold mb-2">
            Safety Information:
          </label>
          <textarea
            id="productSafetyInfo"
            name="safetyInfo"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productIngredients" className="block text-gray-700 text-sm font-bold mb-2">
            Key Ingredients:
          </label>
          <textarea
            id="productIngredients"
            name="ingredients"
            onChange={Session}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgurl" className="block text-gray-700 text-sm font-bold mb-2">
          ImgUrl
          </label>
          <input
            type="text"
            id="imgurl"
            name="imgurl"
            onChange={Session}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgurl" className="block text-gray-700 text-sm font-bold mb-2">
          regularPrice
          </label>
          <input
          
            type="number"
            id="regularPrice"
            name="regularPrice"
            onChange={Session}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgurl" className="block text-gray-700 text-sm font-bold mb-2">
          discountPrice
          </label>
          <input
          
            type="number"
            id="discountPrice"
            name="discountPrice"
            onChange={Session}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
