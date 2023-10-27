import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productManufacturer: {
      type: String,
      required: true,
    },
    productBenefits: {
      type: String,
      required: true,
    },
    productDirections: {
      type: String,
      required: true,
    },
    productSafetyInfo: {
      type: String,
      required: true,
    },
    productIngredients: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    imgurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const products = mongoose.model('product', productSchema);

export default products;