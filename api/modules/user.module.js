import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber:{
      type:Number,
      required:true,
      unique:true,
    },
    address:{
      type:String,
      default:null,
    },
    zipcode:{
      type:Number,
      default:null,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    cart:[{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);


export default User;
