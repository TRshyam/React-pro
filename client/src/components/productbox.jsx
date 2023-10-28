import React, { useState, useEffect } from 'react';

function Productbox() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('/api/admin/products') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


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
            <h4 class="mx-auto">Heart Care</h4> 
      </div>
      <div class="flex text-center items-center border rounded-lg mx-2 px-2 my-3 cursor-pointer"> 
<<<<<<< HEAD
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_st omach.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Diabetes Care</h4> 
=======
            <img src="https://images.apollo247.in/pub/media/healtharea/247images/i/c/ic_stomach.png?tr=q-80,f-webp,c-at_max" class="w-14 h-14 rounded-lg my-2 px-2 py-2 bg-gray-300" />
            <h4 class="mx-auto">Acidity</h4> 
>>>>>>> e6ead947a14f1c64e66e414527f83d0cee489348
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
    <img
      src={product.imgurl}
      className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
      alt="Product Image"
    />
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
