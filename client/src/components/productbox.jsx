import React, { useState, useEffect } from 'react';

function Productbox() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('/api/admin/products') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

// {
    /* <ul>
{products.map((product) => (
  <li key={product._id}>
    <h2>{product.productName}</h2>
    <p>Description: {product.productDescription}</p>
    <p>Manufacturer/Marketer: {product.productManufacturer}</p>
    <p>Price: {product.regularPrice}</p>
    // {/* Add more product information here */
// }
//   </li>
// ))}
// </ul> */}

  return (    

  <div class="px-2 mb-4 select-none flex ">
    <div className=" w-1/5">
      <h2 className=' border-l-orange-50 text-lg font-semibold'>Browse by Health Conditions</h2>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_diabetes.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Diabetes Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_heart.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Diabetes Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_stomach.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Diabetes Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_eyeear.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Eye and Ear Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/a/d/adult.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Elderly Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/l/i/liver_care.jpg?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Liver Cancer</h4> 
      </div>

      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_arthritis.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">EyPain Relief</h4> 
      </div>
      
    

      
    </div>

  
    <div className="flex flex-wrap w-4/5 gap-2 border px-6 ">
    {products.map((product) => (

        <div class="bg-white p-4 border border-gray-300 rounded cursor-pointer">
            <div class="flex items-center">
              {/* <img src="https://images.apollo247.in/pub/media/catalog/product/6/7/6739531-1_ensure_hmb_vanilla_2kg_bib_fop_plunge.jpg?tr=w-250,q-80,f-webp,c-at_max" class="w-full h-full object-center justify-normal" alt="Product Image" /> */}
              <img src={product.imgurl+"?tr=w-250,q-80,f-webp,c-at_max"}/>

            </div>
            <div class="mt-4 text-center">
                <h3 class="text-xl font-semibold ">{product.productName}</h3>
                <h5 class="text-gray-600">Price: ₹583</h5>
                <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-12 rounded-lg">
                    Add
                </button>
            </div>
        </div>

    ))}

    </div>
</div>

  );
  }



export default Productbox;
