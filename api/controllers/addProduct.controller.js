import products from "../modules/products.module.js";

export const addProduct=async(req,res,next)=>{

    const{ productName,productDescription,productManufacturer,productBenefits,productDirections,productSafetyInfo,productIngredients,imgurl,regularPrice,discountPrice}=req.body;   

    // const hashPassword=bcryptjs.hashSync(password,10);
    const newProduct = new products({ productName,productDescription,productManufacturer,productBenefits,productDirections,productSafetyInfo,productIngredients,imgurl,regularPrice,discountPrice });


    try{
        await newProduct.save();
        console.log("product is added successfuly");
        res.status(200).json({message:"product has been added"});
    }
    catch(err){
        next(err);
        console.log(err)
    }
};

export const getProducts = async (req, res, next) => {
  
    try {
      const listings = await products.find();
      console.log(listings)
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }

};
// {
// 	"productName":"uio",
// 	"imgUrl":"ashdgasilohjdgaisjd",
// 	"productDescription":"hudicashh",
// 	"productBenefits":"sdihfoj",
// 	"productDirections":"sijkdchnas",
// 	"productSafetyInfo":"sdfsdfsfsf",
// 	"productIngredients":"asdascs",
// 	"regularPrice":"561441",
// 	"discountPrice":"45856"
// }