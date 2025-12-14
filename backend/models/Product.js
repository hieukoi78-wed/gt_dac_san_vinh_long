// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: { type: String }, 
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    origin: { type: String },
    process: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    sold: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema, 'DANH_MUC_SAN_PHAM');

export default Product;
